// @ts-ignore - Vite env vars
const API_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SALES_PIPELINE_API_URL) || '';

export interface BookDemoRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  selectedSlot: {
    date: string;
    time: string;
  };
}

export interface BookDemoResponse {
  success: boolean;
  prospectId?: string;
  eventId?: string;
  scheduledTime?: string;
  error?: string;
  details?: Record<string, string[]>;
}

export async function bookDemo(data: BookDemoRequest): Promise<BookDemoResponse> {
  if (!API_URL) {
    console.warn('VITE_SALES_PIPELINE_API_URL is not configured');
    // For development without backend, simulate success
    return {
      success: true,
      prospectId: 'demo-prospect-id',
      eventId: 'demo-event-id',
      scheduledTime: new Date(`${data.selectedSlot.date}T${data.selectedSlot.time}:00`).toISOString(),
    };
  }

  const response = await fetch(`${API_URL}/api/public/demo-booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to book demo');
  }

  return result;
}

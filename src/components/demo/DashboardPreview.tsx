import React from 'react';
import {
  Calendar,
  Users,
  CreditCard,
  TrendingUp,
  BarChart3,
  FileText,
  Settings,
  AlertTriangle,
  Plus,
  CalendarDays,
  ClipboardList,
  DollarSign
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-gray-900 text-lg">
            GolfBooker<sup className="text-xs text-brand-green-600">®</sup>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">FI</span>
            <div className="w-10 h-6 bg-gray-200 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="w-8 h-8 bg-brand-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            MA
          </div>
        </div>
      </div>

      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-56 bg-white border-r border-gray-200 overflow-hidden">
          <nav className="p-3">
            {/* Main Navigation */}
            <div className="mb-6">
              <div className="px-3 py-2 bg-brand-green-50 text-brand-green-600 rounded-lg flex items-center gap-3 text-sm font-medium mb-1">
                <BarChart3 size={18} />
                <span>Hallintapaneeli</span>
              </div>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <Calendar size={18} />
                <span>Kalenteri</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <CalendarDays size={18} />
                <span>Tapahtumat</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <Users size={18} />
                <span>Asiakkaat</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <CreditCard size={18} />
                <span>Maksutapahtumat</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <TrendingUp size={18} />
                <span>Markkinointi</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <ClipboardList size={18} />
                <span>Palvelut</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <Users size={18} />
                <span>Osakkaat</span>
              </button>
            </div>

            {/* Analytics Section */}
            <div className="mb-6">
              <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Analytiikka
              </div>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <BarChart3 size={18} />
                <span>Analytiikka</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <FileText size={18} />
                <span>Raportit</span>
              </button>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <DollarSign size={18} />
                <span>Laskut</span>
              </button>
            </div>

            {/* Settings Section */}
            <div>
              <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Tiedot
              </div>
              <button className="w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                <Settings size={18} />
                <span>Asetukset</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden bg-gray-50">
          <div className="p-6">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Hallintapaneeli</h1>
              <p className="text-sm text-gray-500">Tervetuloa takaisin! Tässä on tilan yleiskatsaus.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Today's Revenue */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Tämän päivän liikevaihto</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">€2,585.00</div>
                <div className="text-xs text-green-600">+ 39.6% vs. eilen</div>
                <div className="mt-2 h-8">
                  <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <polyline
                      points="0,20 20,18 40,15 60,12 80,10 100,8"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Today's Bookings */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Tämän päivän varaukset</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
                <div className="text-xs text-red-600">- 48.3% vs. eilen</div>
              </div>

              {/* Current Usage */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Nykyinen käyttöaste</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">6%</div>
                <div className="text-xs text-gray-500">3 aktiivista pelaajaa</div>
              </div>

              {/* Monthly Revenue */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Tämän kuukauden liikevaihto</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">€117,955.00</div>
                <div className="text-xs text-gray-500">- 6% vs. viime kuukausi</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Alerts */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-yellow-500" size={20} />
                  <h3 className="font-semibold text-gray-900">Hälytykset ja ilmoitukset</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-brand-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-brand-green-600 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Alhiyttömän tilit</div>
                      <div className="text-xs text-gray-600 mt-1 flex items-center gap-2">
                        <span className="bg-brand-green-100 text-brand-green-700 px-2 py-0.5 rounded text-xs font-medium">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Pikatoiminnot</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-6 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg flex flex-col items-center gap-2 transition-colors">
                    <Plus size={24} />
                    <span className="text-sm font-medium">Uusi varaus</span>
                  </button>
                  <button className="p-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex flex-col items-center gap-2 transition-colors">
                    <Calendar size={24} />
                    <span className="text-sm font-medium">Näytä kalenteri</span>
                  </button>
                  <button className="p-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex flex-col items-center gap-2 transition-colors">
                    <CalendarDays size={24} />
                    <span className="text-sm font-medium">Seuravaraus</span>
                    <span className="text-xs text-gray-500">Autoillaan varausosa</span>
                  </button>
                  <button className="p-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex flex-col items-center gap-2 transition-colors">
                    <FileText size={24} />
                    <span className="text-sm font-medium">Tapahtumat</span>
                    <span className="text-xs text-gray-500">Näytä tuapatemat</span>
                  </button>
                  <button className="p-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex flex-col items-center gap-2 transition-colors">
                    <ClipboardList size={24} />
                    <span className="text-sm font-medium">Raportit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

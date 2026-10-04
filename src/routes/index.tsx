import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import {
  Building2,
  FileText,
  SlidersHorizontal,
  CalendarCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Info,
  UploadCloud,
  ShieldCheck,
  RefreshCw,
  Search,
  UserCheck,
  FileCheck,
  PhoneCall,
  User,
  Droplets,
  Leaf,
  Flame,
  Briefcase,
  AlertCircle,
  Eye,
  Check,
  Calendar,
  MapPin
} from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

// Industry Approval Data Matrix based on Govt of Maharashtra Single Window Rules
const INDUSTRY_APPROVALS_DATA = {
  Manufacturing: [
    {
      id: 'MPCB-01',
      code: 'MPCB-CTE',
      name: 'MPCB Consent to Establish',
      agency: 'Maharashtra Pollution Control Board',
      category: 'Red / Orange Industry Category',
      sla: '15 Days',
      fee: '₹25,000',
      act: 'Water (Prevention & Control of Pollution) Act, 1974',
      triggerReason: 'Triggered for Manufacturing units generating industrial trade effluent or emissions.',
      status: 'Mandatory',
      icon: Leaf,
      documents: ['DPR & Site Map', 'Water Balance Sheet', 'ETP Flow Diagram']
    },
    {
      id: 'FIRE-01',
      code: 'FIRE-NOC',
      name: 'Fire Department Provisional NOC',
      agency: 'Maharashtra Fire Services',
      category: 'Building Safety & Hazard Clearance',
      sla: '7 Days',
      fee: '₹12,000',
      act: 'Maharashtra Fire Prevention & Life Safety Measures Act, 2006',
      triggerReason: 'Triggered for industrial structures exceeding 500 sq. meters built-up area or storing hazardous materials.',
      status: 'Mandatory',
      icon: Flame,
      documents: ['Architectural Layout', 'Hydrant System Plan', 'Hazardous Storage Audit']
    },
    {
      id: 'DISH-01',
      code: 'DISH-REG',
      name: 'Directorate of Industrial Safety & Health (DISH) Factory Registration',
      agency: 'Department of Labour, Maharashtra',
      category: 'Occupational Safety & Boilers',
      sla: '10 Days',
      fee: '₹8,500',
      act: 'Factories Act, 1948 & Maharashtra Factory Rules',
      triggerReason: 'Triggered for manufacturing premises employing 10+ workers with power or 20+ workers without power.',
      status: 'Mandatory',
      icon: Building2,
      documents: ['Form 1 Application', 'Factory Plan Approval', 'Stability Certificate']
    }
  ],
  'IT & Services': [
    {
      id: 'LAB-01',
      code: 'SHOPS-ACT',
      name: 'Shops & Establishments Act Registration',
      agency: 'Department of Labour, Maharashtra',
      category: 'Commercial Establishment License',
      sla: '3 Days',
      fee: '₹2,500',
      act: 'Maharashtra Shops & Establishments (Regulation of Employment) Act, 2017',
      triggerReason: 'Triggered for all IT/ITeS offices, software tech hubs, and commercial service establishments.',
      status: 'Mandatory',
      icon: Briefcase,
      documents: ['Incorporation Cert', 'Rent Agreement / MIDC Lease', 'List of Employees']
    },
    {
      id: 'LAB-02',
      code: 'LABOUR-CLR',
      name: 'Department of Labour Clearance',
      agency: 'Office of Labour Commissioner',
      category: 'Contract Labour & Welfare Compliance',
      sla: '7 Days',
      fee: '₹4,000',
      act: 'Contract Labour (Regulation & Abolition) Maharashtra Act',
      triggerReason: 'Triggered when engaging contract manpower or operating 24x7 shifts in IT parks.',
      status: 'Mandatory',
      icon: UserCheck,
      documents: ['Contractor List', 'PF/ESIC Registration', '24x7 Shift Permission Form']
    },
    {
      id: 'IND-01',
      code: 'IT-POLICY-REG',
      name: 'State IT Policy Registration & Stamp Duty Waiver',
      agency: 'Directorate of Industries, Maharashtra',
      category: 'Incentive & Fiscal Clearance',
      sla: '5 Days',
      fee: '₹1,000',
      act: 'Maharashtra IT / ITeS Policy 2023',
      triggerReason: 'Triggered to claim 100% stamp duty exemption and power tariff concessions for IT units in Maharashtra.',
      status: 'Incentive Scheme',
      icon: FileCheck,
      documents: ['IT Enterprise Self-Decl', 'MIDC IT Park Certificate', 'Project Cost Breakdown']
    }
  ],
  'Food Processing': [
    {
      id: 'FSSAI-01',
      code: 'FSSAI-LIC',
      name: 'FSSAI State Food Manufacturing License',
      agency: 'Food Safety & Standards Authority of India (State Cell)',
      category: 'Food Safety & Quality Hygiene',
      sla: '14 Days',
      fee: '₹7,500',
      act: 'Food Safety and Standards Act, 2006',
      triggerReason: 'Triggered for food processing, agro-packaging, and beverage manufacturing units producing > 2 MT daily.',
      status: 'Mandatory',
      icon: ShieldCheck,
      documents: ['Food Safety Management Plan', 'Water Testing Lab Report', 'List of Machinery']
    },
    {
      id: 'FDA-01',
      code: 'FDA-MH',
      name: 'FDA Approval (Food & Drug Administration)',
      agency: 'Food & Drug Administration, Maharashtra',
      category: 'Public Health Sanitation',
      sla: '10 Days',
      fee: '₹5,000',
      act: 'Maharashtra Drugs & Cosmetics Rules & Food Admin Code',
      triggerReason: 'Triggered for raw material extraction, food processing additives, and bottling operations.',
      status: 'Mandatory',
      icon: AlertCircle,
      documents: ['Chemist Qualification Cert', 'Premises Blueprint', 'NOC from Local Health Body']
    },
    {
      id: 'MPCB-02',
      code: 'MPCB-FOOD',
      name: 'MPCB Consent (Maharashtra Pollution Control Board)',
      agency: 'Maharashtra Pollution Control Board',
      category: 'Effluent & Organic Waste Management',
      sla: '12 Days',
      fee: '₹15,000',
      act: 'Water (Prevention & Control of Pollution) Act, 1974',
      triggerReason: 'Triggered for food processing plants discharging washing water or organic solid residue.',
      status: 'Mandatory',
      icon: Leaf,
      documents: ['Organic Waste Management DPR', 'Grease Trap Design', 'E-Waste Tie Up']
    }
  ],
  Textiles: [
    {
      id: 'MPCB-03',
      code: 'MPCB-TEX',
      name: 'MPCB Consent (Textile Dyeing & Weaving)',
      agency: 'Maharashtra Pollution Control Board',
      category: 'Zero Liquid Discharge (ZLD) Compliance',
      sla: '21 Days',
      fee: '₹35,000',
      act: 'Water & Air Pollution Prevention Control Act',
      triggerReason: 'Triggered for wet textile processing, dyeing mills, and spinning plants requiring ZLD plant setup.',
      status: 'Mandatory (High Focus)',
      icon: Leaf,
      documents: ['ZLD Plant Proposal', 'CETP Membership Cert', 'Hazardous Waste Authorization']
    },
    {
      id: 'GW-01',
      code: 'GSDA-NOC',
      name: 'Ground Water Authority Clearance (GSDA/CGWA)',
      agency: 'Groundwater Surveys & Development Agency, MH',
      category: 'Aquifer & Water Extraction NOC',
      sla: '15 Days',
      fee: '₹10,000',
      act: 'Maharashtra Groundwater (Development and Management) Act, 2009',
      triggerReason: 'Triggered for textile mills drawing groundwater in semi-critical or notified industrial blocks.',
      status: 'Mandatory',
      icon: Droplets,
      documents: ['Hydrogeological Report', 'Rainwater Harvesting Plan', 'Flow Meter Specs']
    },
    {
      id: 'DISH-02',
      code: 'BOILER-REG',
      name: 'Factory Inspectorate Registration (DISH Boiler Cell)',
      agency: 'Directorate of Industrial Safety & Health (Boiler Cell)',
      category: 'Industrial Boiler & Vessel Safety',
      sla: '10 Days',
      fee: '₹9,000',
      act: 'Indian Boilers Act, 1923 & Maharashtra Boiler Rules',
      triggerReason: 'Triggered for textile processing units utilizing steam boilers, thermic fluid heaters, or pressure vessels.',
      status: 'Mandatory',
      icon: Building2,
      documents: ['Boiler Maker Cert (Form II)', 'Steam Pipe Layout', 'Competent Person Cert']
    }
  ]
};

// Initial Documents for Smart Document Vault
const INITIAL_DOCUMENTS = [
  {
    id: 'DOC-101',
    name: 'PAN Card of Enterprise / Entity',
    category: 'Legal Identity',
    file: 'PAN_AAACU9812K_Udyam.pdf',
    uploadedAt: '2026-09-28',
    size: '1.2 MB',
    status: 'Verified',
    ocrConfidence: '99.8%',
    ocrMatch: 'Name & PAN match CBDT Registry',
    digiLockerSource: true
  },
  {
    id: 'DOC-102',
    name: 'Certificate of Incorporation / Partnership Deed',
    category: 'Business Structure',
    file: 'RoC_Incorporation_2026.pdf',
    uploadedAt: '2026-09-29',
    size: '3.4 MB',
    status: 'Verified',
    ocrConfidence: '100%',
    ocrMatch: 'CIN: U72900PN2026PTC219012 Verified',
    digiLockerSource: true
  },
  {
    id: 'DOC-103',
    name: 'MIDC Land Allotment Letter / 7/12 Extract',
    category: 'Land & Premises',
    file: 'MIDC_Plot_C42_Allotment.pdf',
    uploadedAt: '2026-10-01',
    size: '4.1 MB',
    status: 'Verified',
    ocrConfidence: '98.5%',
    ocrMatch: 'Survey No. 44/2 & Plot C-42 Matched',
    digiLockerSource: false
  },
  {
    id: 'DOC-104',
    name: 'Detailed Project Report (DPR) & Site Plan',
    category: 'Engineering & Environment',
    file: 'DPR_Chakan_Plant_V3.pdf',
    uploadedAt: '2026-10-02',
    size: '8.7 MB',
    status: 'Verified',
    ocrConfidence: '97.2%',
    ocrMatch: 'Building Footprint & ETP Layout Verified',
    digiLockerSource: false
  }
];

// Parallel Processing Department Workflows Data
const PARALLEL_WORKFLOWS_DATA = [
  {
    deptId: 'DEPT-ENV',
    name: 'Environment Clearance',
    agency: 'Maharashtra Pollution Control Board (MPCB)',
    officer: 'Dr. S. R. Patil (Regional Officer)',
    contact: '+91 94220 11029',
    status: 'In Scrutiny',
    daysElapsed: 11,
    slaDays: 15,
    remainingDays: 4,
    timerStatus: 'normal',
    currentStep: 'Field Verification & Air/Water Load Audit',
    stage: 'Stage 3 of 4'
  },
  {
    deptId: 'DEPT-FIRE',
    name: 'Fire Safety NOC',
    agency: 'Maharashtra Fire Services Dept.',
    officer: 'Shri V. M. Deshmukh (Chief Fire Officer)',
    contact: '+91 98231 44091',
    status: 'Final Approval Pending',
    daysElapsed: 5,
    slaDays: 7,
    remainingDays: 2,
    timerStatus: 'warning',
    currentStep: 'Hydrant & Escape Map Sign-off',
    stage: 'Stage 3 of 3'
  },
  {
    deptId: 'DEPT-WATER',
    name: 'Water Supply Sanction',
    agency: 'MIDC Water Supply Cell',
    officer: 'Er. Rajesh Wagh (Executive Engineer)',
    contact: '+91 94212 88201',
    status: 'Approved & Issued',
    daysElapsed: 3,
    slaDays: 10,
    remainingDays: 7,
    timerStatus: 'completed',
    currentStep: 'Pipeline Connection Order Released',
    stage: 'Completed'
  },
  {
    deptId: 'DEPT-PWR',
    name: 'Power Load Approval',
    agency: 'MSEDCL (Maharashtra State Electricity)',
    officer: 'Shri A. B. Joshi (Superintending Engineer)',
    contact: '+91 98901 33110',
    status: 'Overdue / Escalated',
    daysElapsed: 12,
    slaDays: 10,
    remainingDays: -2,
    timerStatus: 'overdue',
    currentStep: 'Substation Feasibility Study Delayed',
    stage: 'Stage 2 of 4 (Bottleneck Alert)'
  },
  {
    deptId: 'DEPT-IND',
    name: 'Industrial Single Window Clearance',
    agency: 'Directorate of Industries, MH',
    officer: 'Nodal Officer, MIDC Cell',
    contact: '+91 91580 00412',
    status: 'In Progress',
    daysElapsed: 6,
    slaDays: 14,
    remainingDays: 8,
    timerStatus: 'normal',
    currentStep: 'Consolidated License Compilation',
    stage: 'Stage 2 of 3'
  }
];

function Index() {
  const [activeTab, setActiveTab] = useState('approvals');
  const [industryCategory, setIndustryCategory] = useState('Manufacturing');
  const [investmentCategory, setInvestmentCategory] = useState('5_to_50_cr');
  const [district, setDistrict] = useState('Pune');
  const [landType, setLandType] = useState('MIDC');
  const [selectedRuleInfo, setSelectedRuleInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);
  const [isSyncingDigiLocker, setIsSyncingDigiLocker] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDocName, setNewDocName] = useState('');

  const [inspectionDate, setInspectionDate] = useState('2026-10-15');
  const [inspectionTime, setInspectionTime] = useState('10:30 AM');
  const [rescheduleReason, setRescheduleReason] = useState('');
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [inspectionStatusMessage, setInspectionStatusMessage] = useState('');

  const currentApprovals = INDUSTRY_APPROVALS_DATA[industryCategory] || [];
  const filteredApprovals = currentApprovals.filter(appr =>
    appr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appr.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appr.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDigiLockerFetch = () => {
    setIsSyncingDigiLocker(true);
    setTimeout(() => {
      const digiDoc = {
        id: `DOC-DL-${Date.now().toString().slice(-3)}`,
        name: 'GSTIN Registration Certificate (Form REG-06)',
        category: 'Tax & Compliance',
        file: 'DigiLocker_GSTIN_27AAACU9812K1Z9.pdf',
        uploadedAt: new Date().toISOString().split('T')[0],
        size: '2.1 MB',
        status: 'Verified',
        ocrConfidence: '100%',
        ocrMatch: 'Fetched & Verified via Govt DigiLocker API',
        digiLockerSource: true
      };
      setDocuments(prev => [digiDoc, ...prev]);
      setIsSyncingDigiLocker(false);
    }, 1200);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (!newDocName.trim()) return;
    const customDoc = {
      id: `DOC-USR-${Date.now().toString().slice(-3)}`,
      name: newDocName,
      category: 'Uploaded Attachment',
      file: `${newDocName.replace(/\s+/g, '_')}_Scan.pdf`,
      uploadedAt: new Date().toISOString().split('T')[0],
      size: '1.8 MB',
      status: 'Verified',
      ocrConfidence: '96.4%',
      ocrMatch: 'OCR Processed: Header & Signature Verified',
      digiLockerSource: false
    };
    setDocuments(prev => [customDoc, ...prev]);
    setNewDocName('');
    setShowUploadModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex flex-col font-['Times_New_Roman',serif] text-black">
      {/* 1. TRICOLOR TOP STRIP */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-[#FF9933] h-full" />
        <div className="w-1/3 bg-white h-full" />
        <div className="w-1/3 bg-[#138808] h-full" />
      </div>

      {/* 2. OFFICIAL TOP HEADER WITH CUSTOM LOGO */}
      <header className="bg-[#002147] text-white border-b-2 border-[#FF9933]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/udyam-logo.jpg.png"
              alt="Udyam Seva Logo"
              className="h-16 w-auto object-contain border border-blue-900 bg-white"
            />
          </div>
        </div>
      </header>

      {/* 3. UTILITY BAR */}
      <div className="bg-[#EAEFF5] text-black text-xs border-b border-gray-400 px-4 py-1 font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span>Helpdesk: <strong>1800-120-8040</strong></span>
            <span>|</span>
            <span>State Single Window Clearance System</span>
          </div>
          <div>
            <span>Last Updated: <strong>03-Oct-2026</strong></span>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col md:flex-row my-3 px-3 gap-3">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 bg-[#002147] text-white border border-gray-500 shrink-0 self-start rounded-none">
          <div className="bg-[#001730] border-b border-gray-600 px-3 py-2 text-xs font-bold uppercase tracking-widest text-amber-300">
            Navigation Menu
          </div>

          <nav className="divide-y divide-blue-950 font-sans text-xs">
            <button
              onClick={() => setActiveTab('approvals')}
              className={`w-full flex items-center space-x-2 px-3 py-3 text-left font-bold transition-none rounded-none ${
                activeTab === 'approvals' ? 'bg-[#FF671F] text-white border-l-4 border-amber-300' : 'hover:bg-blue-950 text-gray-200'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 shrink-0" />
              <span>Know Your Approvals</span>
            </button>

            <button
              onClick={() => setActiveTab('vault')}
              className={`w-full flex items-center space-x-2 px-3 py-3 text-left font-bold transition-none rounded-none ${
                activeTab === 'vault' ? 'bg-[#FF671F] text-white border-l-4 border-amber-300' : 'hover:bg-blue-950 text-gray-200'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Smart Document Vault</span>
            </button>

            <button
              onClick={() => setActiveTab('tracking')}
              className={`w-full flex items-center space-x-2 px-3 py-3 text-left font-bold transition-none rounded-none ${
                activeTab === 'tracking' ? 'bg-[#FF671F] text-white border-l-4 border-amber-300' : 'hover:bg-blue-950 text-gray-200'
              }`}
            >
              <Clock className="w-4 h-4 shrink-0" />
              <span>Parallel Processing</span>
            </button>

            <button
              onClick={() => setActiveTab('inspection')}
              className={`w-full flex items-center space-x-2 px-3 py-3 text-left font-bold transition-none rounded-none ${
                activeTab === 'inspection' ? 'bg-[#FF671F] text-white border-l-4 border-amber-300' : 'hover:bg-blue-950 text-gray-200'
              }`}
            >
              <CalendarCheck className="w-4 h-4 shrink-0" />
              <span>Inspect & Renew</span>
            </button>
          </nav>
        </aside>

        {/* MAIN DYNAMIC CONTENT AREA */}
        <main className="flex-1 bg-white border border-gray-400 p-4 rounded-none shadow-none">
          
          {/* TAB 1: KNOW YOUR APPROVALS */}
          {activeTab === 'approvals' && (
            <div className="space-y-4">
              <div className="border-b border-[#002147] pb-2">
                <h2 className="text-lg font-bold text-[#002147] uppercase font-sans tracking-wide">
                  Know Your Approvals (Dynamic Rules Engine)
                </h2>
                <p className="text-xs text-gray-700 font-sans mt-0.5">
                  Select your enterprise parameters below to generate statutory approvals per Maharashtra Single Window Rules.
                </p>
              </div>

              {/* DYNAMIC FORM */}
              <div className="bg-[#F8F9FA] border border-gray-400 p-3 grid grid-cols-1 md:grid-cols-4 gap-3 font-sans text-xs">
                <div>
                  <label className="block font-bold uppercase text-gray-900 mb-1">
                    1. Industry Category *
                  </label>
                  <select
                    value={industryCategory}
                    onChange={(e) => setIndustryCategory(e.target.value)}
                    className="w-full bg-white border border-gray-500 p-1.5 font-semibold text-[#002147] rounded-none outline-none"
                  >
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="IT & Services">IT & Services</option>
                    <option value="Food Processing">Food Processing</option>
                    <option value="Textiles">Textiles</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase text-gray-900 mb-1">2. Capital Investment</label>
                  <select value={investmentCategory} onChange={(e) => setInvestmentCategory(e.target.value)} className="w-full bg-white border border-gray-500 p-1.5 text-gray-900 rounded-none outline-none">
                    <option value="below_5_cr">Below ₹5 Crore</option>
                    <option value="5_to_50_cr">₹5 Cr to ₹50 Cr</option>
                    <option value="above_50_cr">Above ₹50 Cr</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase text-gray-900 mb-1">3. Land Type</label>
                  <select value={landType} onChange={(e) => setLandType(e.target.value)} className="w-full bg-white border border-gray-500 p-1.5 text-gray-900 rounded-none outline-none">
                    <option value="MIDC">MIDC Allotted Zone</option>
                    <option value="Private_NA">Private NA Land</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase text-gray-900 mb-1">4. District</label>
                  <select value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full bg-white border border-gray-500 p-1.5 text-gray-900 rounded-none outline-none">
                    <option value="Pune">Pune (Chakan / Pimpri)</option>
                    <option value="Thane">Thane / Navi Mumbai</option>
                    <option value="Mumbai">Mumbai City / Suburban</option>
                    <option value="Palghar">Palghar (Boisar)</option>
                    <option value="Raigad">Raigad (Taloja / Mahad)</option>
                    <option value="Nashik">Nashik (Ambad / Satpur)</option>
                    <option value="Nagpur">Nagpur (Butibori)</option>
                    <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar</option>
                    <option value="Kolhapur">Kolhapur (Gokul Shirgaon)</option>
                    <option value="Solapur">Solapur (Chincholi)</option>
                    <option value="Amravati">Amravati (Nandgaon Peth)</option>
                    <option value="Satara">Satara (Khed)</option>
                  </select>
                </div>
              </div>

              {/* DYNAMIC APPROVAL CARDS */}
              <div className="space-y-2 font-sans">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Mandatory Approvals for {industryCategory}
                </h3>

                {filteredApprovals.map((appr) => {
                  const ApprIcon = appr.icon || Building2;
                  return (
                    <div key={appr.id} className="border border-gray-400 bg-white p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 rounded-none">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="p-2 bg-gray-100 border border-gray-300 text-[#002147] shrink-0 rounded-none">
                          <ApprIcon className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="bg-[#002147] text-white text-[10px] font-mono font-bold px-1 py-0.2">{appr.code}</span>
                            <h4 className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                              {appr.name}
                              <button type="button" onClick={() => setSelectedRuleInfo(appr)} title="Explain Rule">
                                <Info className="w-4 h-4 text-blue-700 cursor-pointer" />
                              </button>
                            </h4>
                          </div>
                          <div className="text-xs text-gray-700">Department: <strong>{appr.agency}</strong></div>
                          <p className="text-[11px] text-gray-600 font-mono">Act: {appr.act}</p>
                        </div>
                      </div>

                      <div className="text-right text-xs shrink-0 border-t md:border-t-0 md:border-l border-gray-300 pt-2 md:pt-0 md:pl-3">
                        <div className="font-bold text-green-800 text-xs flex items-center justify-end gap-1"><Clock className="w-3 h-3" /> SLA: {appr.sla}</div>
                        <div className="text-gray-700">Fee: <strong>{appr.fee}</strong></div>
                        <button onClick={() => setSelectedRuleInfo(appr)} className="mt-1 bg-gray-200 text-black border border-gray-500 px-2 py-0.5 text-[11px] font-bold rounded-none">
                          Rule Info
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* RULE EXPLANATION MODAL */}
              {selectedRuleInfo && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3">
                  <div className="bg-white border-2 border-[#002147] max-w-lg w-full p-4 space-y-3 rounded-none font-sans text-xs">
                    <div className="bg-[#002147] text-white p-2 -m-4 mb-3 flex items-center justify-between border-b border-amber-400">
                      <span className="font-bold uppercase tracking-wide">Explainable Rules Engine Logic</span>
                      <button onClick={() => setSelectedRuleInfo(null)} className="text-white font-bold">✕</button>
                    </div>

                    <h3 className="text-sm font-bold text-[#002147]">{selectedRuleInfo.name}</h3>

                    <div className="bg-gray-100 border border-gray-300 p-2.5 space-y-1">
                      <div className="font-bold text-gray-900 uppercase">Trigger Condition:</div>
                      <p className="text-gray-800">{selectedRuleInfo.triggerReason}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-mono bg-gray-50 border p-2">
                      <div>Act: <strong>{selectedRuleInfo.act}</strong></div>
                      <div>SLA: <strong>{selectedRuleInfo.sla}</strong></div>
                      <div>Fee: <strong>{selectedRuleInfo.fee}</strong></div>
                      <div>Category: <strong>{industryCategory}</strong></div>
                    </div>

                    <div className="flex justify-end">
                      <button onClick={() => setSelectedRuleInfo(null)} className="bg-[#002147] text-white px-3 py-1 font-bold uppercase rounded-none">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SMART DOCUMENT VAULT */}
          {activeTab === 'vault' && (
            <div className="space-y-4 font-sans">
              <div className="border-b border-[#002147] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-[#002147] uppercase tracking-wide">
                  Smart Document Vault (AI Validation)
                </h2>
                <div className="flex items-center gap-2">
                  <button onClick={handleDigiLockerFetch} disabled={isSyncingDigiLocker} className="bg-[#002147] text-amber-300 border border-amber-500 px-2.5 py-1 text-xs font-bold uppercase flex items-center gap-1 rounded-none">
                    <RefreshCw className={`w-3 h-3 ${isSyncingDigiLocker ? 'animate-spin' : ''}`} />
                    DigiLocker Sync
                  </button>
                  <button onClick={() => setShowUploadModal(true)} className="bg-[#FF671F] text-white px-2.5 py-1 text-xs font-bold uppercase rounded-none">
                    Upload Document
                  </button>
                </div>
              </div>

              <div className="border border-gray-400 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#002147] text-white uppercase text-[11px] font-bold">
                      <th className="p-2.5">Document Name</th>
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5 text-center">AI Verification Status</th>
                      <th className="p-2.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-gray-50">
                        <td className="p-2.5 font-bold text-gray-900">{doc.name} <div className="text-[10px] text-gray-500 font-mono">{doc.file}</div></td>
                        <td className="p-2.5">{doc.category}</td>
                        <td className="p-2.5 text-center">
                          <span className="inline-flex items-center gap-1 text-green-900 bg-green-100 border border-green-400 px-2 py-0.5 font-bold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                            Verified ({doc.ocrConfidence})
                          </span>
                        </td>
                        <td className="p-2.5 text-right">
                          <button onClick={() => alert(`Opening ${doc.name}`)} className="bg-gray-200 border border-gray-400 px-2 py-0.5 font-bold">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PARALLEL PROCESSING */}
          {activeTab === 'tracking' && (
            <div className="space-y-4 font-sans">
              <div className="border-b border-[#002147] pb-2">
                <h2 className="text-lg font-bold text-[#002147] uppercase tracking-wide">
                  Parallel Processing (Live Tracking & SLAs)
                </h2>
              </div>

              <div className="border border-gray-400 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#002147] text-white uppercase text-[11px] font-bold">
                      <th className="p-2.5">Department</th>
                      <th className="p-2.5">Assigned Officer</th>
                      <th className="p-2.5 text-center">SLA Status Timer</th>
                      <th className="p-2.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {PARALLEL_WORKFLOWS_DATA.map((wf) => (
                      <tr key={wf.deptId} className="hover:bg-gray-50">
                        <td className="p-2.5 font-bold text-gray-900">{wf.name} <div className="text-[10px] text-gray-500 font-mono">{wf.agency}</div></td>
                        <td className="p-2.5">{wf.officer}</td>
                        <td className="p-2.5 text-center">
                          {wf.timerStatus === 'overdue' ? (
                            <span className="bg-red-100 text-red-900 border border-red-500 px-2 py-0.5 font-bold uppercase">
                              Overdue ({Math.abs(wf.remainingDays)} Days)
                            </span>
                          ) : wf.timerStatus === 'completed' ? (
                            <span className="bg-green-100 text-green-900 border border-green-400 px-2 py-0.5 font-bold">Approved</span>
                          ) : (
                            <span className="bg-blue-50 text-blue-900 border border-blue-300 px-2 py-0.5 font-bold">{wf.remainingDays} Days Left</span>
                          )}
                        </td>
                        <td className="p-2.5 text-right">
                          <button onClick={() => alert('Status checked')} className="bg-gray-200 border border-gray-400 px-2 py-0.5 font-bold">Track</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: INSPECT & RENEW */}
          {activeTab === 'inspection' && (
            <div className="space-y-4 font-sans">
              <div className="border-b border-[#002147] pb-2">
                <h2 className="text-lg font-bold text-[#002147] uppercase tracking-wide">
                  Inspect & Renew (Joint Inspection)
                </h2>
              </div>

              <div className="bg-[#002147] text-white p-4 border border-amber-500 rounded-none space-y-3">
                <div className="flex justify-between items-center border-b border-blue-900 pb-2">
                  <div>
                    <span className="bg-[#FF671F] text-white text-[10px] uppercase font-bold px-1.5 py-0.5">Joint Inspection Visit</span>
                    <h3 className="text-base font-bold text-amber-300 mt-1 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {inspectionDate} at {inspectionTime}
                    </h3>
                  </div>
                  <button onClick={() => alert('Reschedule requested')} className="bg-white text-black px-2.5 py-1 text-xs font-bold uppercase rounded-none">
                    Reschedule
                  </button>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400 uppercase text-[10px] block">Location Venue:</span>
                  <div className="font-semibold text-white flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF671F]" /> Plot No. C-42, Chakan Industrial Area Phase 2, Pune - 410501
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* 5. FORMAL GOVT FOOTER */}
      <footer className="bg-[#001730] text-gray-300 text-xs border-t-2 border-[#FF9933] py-3 px-4 mt-auto font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2026 Udyam Seva - Portal managed by Government of Maharashtra.</p>
          <p className="text-[11px] text-amber-300">Single Window Clearance Act Compliant</p>
        </div>
      </footer>
    </div>
  );
}
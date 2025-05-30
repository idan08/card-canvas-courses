const courseStyles = {
  cs: {
    buttonPrimary: 'bg-blue-800 text-white hover:bg-blue-700',
    buttonSecondary: 'bg-white text-blue-800 hover:bg-blue-100',
    buttonThird: 'bg-white text-sky-600 hover:bg-sky-100',
    buttonMissing: 'bg-blue-800 text-white',
    buttonLoginGradient: 'from-blue-600 to-blue-800',
    jobRequestModalGradient: 'from-blue-600 to-blue-900',
    bgGradient: 'from-blue-50 to-white',
    textColor: 'text-blue-950',
    textSecondary: 'text-sky-600 hover: text-sky-700',
    cardBorder: 'border-blue-200',
    cardBorderStrong: 'border-blue-600',
    cardBg: 'from-blue-800 to-blue-700',
    iconColor: 'text-blue-600',
    iconColorReverse:'md bg-sky-600 hover:bg-sky-700 text-white',
    linksIconBg: 'bg-blue-50',
    linksIconColor: 'text-blue-600',
    bgLight: 'bg-blue-50',
    subjectBg: 'bg-blue-100',
    starColor: 'text-blue-400',
    TLBg: 'from-blue-700 via-blue-800 to-blue-900',
    shadowGlow: 'rgba(37, 99, 235, 0.3)',
    shadowGlowHover: 'rgba(37, 99, 235, 0.5)',
    fillColor: '#2563eb'
  },
  ee: {
    buttonPrimary: 'bg-purple-800 text-white hover:bg-purple-700',
    buttonSecondary: 'bg-white text-purple-800 hover:bg-purple-100',
    buttonThird: 'bg-white text-purple-600 hover:bg-purple-100',
    buttonMissing: 'bg-purple-800 text-white',
    buttonLoginGradient: 'from-purple-600 to-purple-800',
    jobRequestModalGradient: 'from-purple-600 to-purple-900',
    bgGradient: 'from-purple-50 to-white',
    textColor: 'text-purple-950',
    textSecondary: 'text-purple-600 hover: text-purple-700',
    cardBorder: 'border-purple-200',
    cardBorderStrong: 'border-purple-600',
    cardBg: 'from-purple-800 to-purple-700',
    iconColor: 'text-purple-700',
    iconColorReverse:'md bg-purple-600 hover:bg-purple-700 text-white',
    linksIconBg: 'bg-purple-50',
    linksIconColor: 'text-purple-600',
    bgLight: 'bg-purple-50',
    subjectBg: 'bg-purple-100',
    starColor: 'text-purple-400',
    TLBg: 'from-purple-700 via-purple-800 to-purple-900',
    shadowGlow: 'rgba(147, 51, 234, 0.3)',
    shadowGlowHover: 'rgba(147, 51, 234, 0.5)',
    fillColor: '#9333ea'
  },
  ie: {
    buttonPrimary: 'bg-rose-800 text-white hover:bg-rose-700',
    buttonSecondary: 'bg-white text-rose-800 hover:bg-rose-100',
    buttonThird: 'bg-white text-rose-600 hover:bg-rose-100',
    buttonMissing: 'bg-rose-800 text-white',
    buttonLoginGradient: 'from-rose-600 to-rose-800',
    jobRequestModalGradient: 'from-rose-600 to-rose-900',
    bgGradient: 'from-rose-50 to-white',
    textColor: 'text-rose-950',
    textSecondary: 'text-rose-600 hover: text-rose-700',
    cardBorder: 'border-rose-200',
    cardBorderStrong: 'border-rose-600',
    cardBg: 'from-rose-800 to-rose-700',
    iconColor: 'text-rose-700',
    iconColorReverse:'md bg-rose-600 hover:bg-rose-700 text-white',
    linksIconBg: 'bg-rose-50',
    linksIconColor: 'text-rose-600',
    bgLight: 'bg-rose-50',
    subjectBg: 'bg-rose-100',
    starColor: 'text-rose-400',
    TLBg: 'from-rose-700 via-rose-800 to-rose-900',
    shadowGlow: 'rgba(225, 29, 72, 0.3)',
    shadowGlowHover: 'rgba(225, 29, 72, 0.5)',
    fillColor: '#e11d48'
  },
};

const courseTypeOptions = [
  { type: 'cs', label: 'מדעי המחשב' },
  { type: 'ee', label: 'הנדסת חשמל' },
  { type: 'ie', label: 'הנדסת תעשייה וניהול' },
];

export { courseStyles, courseTypeOptions };
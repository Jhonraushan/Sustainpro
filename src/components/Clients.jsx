import { useInView } from '../hooks/useInView'

const ShellLogo = () => (
  <svg viewBox="0 0 80 80" className="client-logo">
    <path d="M40 4C22.3 4 8 18.3 8 36s14.3 32 32 32 32-14.3 32-32S57.7 4 40 4z" fill="#DD1D21"/>
    <path d="M40 8c-2.5 0-4.5 6-4.5 18.5v15c0 12.5 2 18.5 4.5 18.5s4.5-6 4.5-18.5v-15C44.5 14 42.5 8 40 8z" fill="#FBCE07"/>
    <path d="M23.5 20c-1.2 2.2 2 7.2 10 15l10.6 10.6c8 8 12.8 11.2 15 10s-2-7.2-10-15L38.5 30c-8-8-13.8-12.2-15-10z" fill="#FBCE07"/>
    <path d="M16 36c0 2.5 6 4.5 18.5 4.5h11c12.5 0 18.5-2 18.5-4.5s-6-4.5-18.5-4.5h-11C22 31.5 16 33.5 16 36z" fill="#FBCE07"/>
    <path d="M23.5 52c1.2 2.2 7 -2 15-10l10.6-10.6c8-8 11.2-12.8 10-15s-7.2 2-15 10L33.5 37c-8 8-11.2 12.8-10 15z" fill="#FBCE07"/>
  </svg>
)

const VitolLogo = () => (
  <svg viewBox="0 0 120 40" className="client-logo">
    <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#1a1a2e">Vitol</text>
    <circle cx="8" cy="24" r="4" fill="#F5A623"/>
  </svg>
)

const MacquarieLogo = () => (
  <svg viewBox="0 0 140 40" className="client-logo">
    <text x="5" y="28" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="20" fill="#000" textTransform="none" style={{textTransform: 'none'}}>MACQUARIE</text>
  </svg>
)

const ZomatoLogo = () => (
  <svg viewBox="0 0 120 40" className="client-logo">
    <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="#E23744">zomato</text>
  </svg>
)

const NestleLogo = () => (
  <svg viewBox="0 0 120 50" className="client-logo">
    <text x="10" y="35" fontFamily="serif" fontWeight="bold" fontSize="28" fill="#003087">Nestlé</text>
  </svg>
)

const IndianOilLogo = () => (
  <svg viewBox="0 0 80 80" className="client-logo">
    <circle cx="40" cy="32" r="24" fill="#F7941E"/>
    <text x="22" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#003087">IOC</text>
    <text x="8" y="70" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="9" fill="#003087">IndianOil</text>
  </svg>
)

const KECLogo = () => (
  <svg viewBox="0 0 120 50" className="client-logo">
    <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#003087">KEC</text>
    <text x="10" y="44" fontFamily="Arial, sans-serif" fontSize="8" fill="#003087">INTERNATIONAL LIMITED</text>
  </svg>
)

const TataSteelLogo = () => (
  <svg viewBox="0 0 130 50" className="client-logo">
    <text x="5" y="25" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#003087">TATA</text>
    <text x="5" y="42" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="14" fill="#003087">STEEL</text>
    <rect x="50" y="10" width="2" height="35" fill="#003087"/>
  </svg>
)

const AdaniLogo = () => (
  <svg viewBox="0 0 120 50" className="client-logo">
    <text x="10" y="35" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="#004B87">Adani</text>
  </svg>
)

const RelianceLogo = () => (
  <svg viewBox="0 0 140 50" className="client-logo">
    <text x="5" y="33" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="20" fill="#003399">RELIANCE</text>
  </svg>
)

const CLIENTS = [
  { name: 'Shell', Logo: ShellLogo },
  { name: 'Vitol', Logo: VitolLogo },
  { name: 'Macquarie', Logo: MacquarieLogo },
  { name: 'Zomato', Logo: ZomatoLogo },
  { name: 'Nestle', Logo: NestleLogo },
  { name: 'Indian Oil', Logo: IndianOilLogo },
  { name: 'KEC International', Logo: KECLogo },
  { name: 'Tata Steel', Logo: TataSteelLogo },
  { name: 'Adani', Logo: AdaniLogo },
  { name: 'Reliance', Logo: RelianceLogo },
]

export default function Clients() {
  const [ref, inView] = useInView()

  return (
    <section className={`clients${inView ? ' fade-in' : ''}`} id="clients" ref={ref}>
      <h2 className="heading">Our Clients</h2>
      <p className="clients-subtitle">We work with leading brands across the globe</p>
      <div className="clients-marquee">
        <div className="clients-track">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div className="client-card" key={`${client.name}-${i}`} title={client.name}>
              <client.Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

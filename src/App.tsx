import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Droplet, 
  Fingerprint, 
  Activity, 
  EyeOff, 
  Scale, 
  AlertOctagon, 
  FileWarning,
  ServerCrash
} from 'lucide-react';

// --- Componentes Visuales ---

const BloodDrip = () => (
  <svg className="w-full h-16 sm:h-24 text-red-700 fill-current" viewBox="0 0 1000 100" preserveAspectRatio="none">
    <path d="M0,0 L1000,0 L1000,10 C980,10 970,40 950,40 C930,40 920,10 900,10 C880,10 870,60 850,60 C830,60 820,15 800,15 C780,15 770,80 750,80 C730,80 720,20 700,20 C680,20 670,50 650,50 C630,50 620,5 600,5 C580,5 570,90 550,90 C530,90 520,30 500,30 C480,30 470,70 450,70 C430,70 420,10 400,10 C380,10 370,45 350,45 C330,45 320,15 300,15 C280,15 270,60 250,60 C230,60 220,20 200,20 C180,20 170,85 150,85 C130,85 120,25 100,25 C80,25 70,50 50,50 C30,50 20,10 0,10 Z" />
  </svg>
);

const GlitchText = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-[2px] -z-10 text-red-600 opacity-70 animate-pulse">{text}</span>
    <span className="absolute top-0 -left-[2px] -z-20 text-red-900 opacity-70">{text}</span>
  </div>
);

// --- Componente Principal ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-red-900 selection:text-white pb-20">
      {/* Header Fijo */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 border-b border-red-900 backdrop-blur-sm shadow-[0_4px_30px_rgba(220,38,38,0.15)]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="text-red-600 w-6 h-6 animate-pulse" />
            <span className="font-bold tracking-widest text-red-500 uppercase text-sm">Ley 19.628</span>
          </div>
          <div className="text-xs font-mono text-gray-500 hidden sm:block">
            SISTEMA DE PROTECCIÓN ACTIVO
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full opacity-50">
          <BloodDrip />
        </div>
        
        {/* Efecto de fondo radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-950/30 border border-red-900/50 rounded-full mb-8">
            <Activity className="text-red-500 w-5 h-5 mr-2" />
            <span className="text-red-400 text-xs font-mono tracking-widest uppercase">Tus datos son tu ADN digital</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            <GlitchText text="No dejes que te Desangren" className="block text-white" /> <br></br> <br></br>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light border-l-4 border-red-700 pl-4 text-left">
            La <strong className="text-white">Ley de Protección de Datos Personales en Chile</strong> está evolucionando. Las empresas ya no pueden extraer tu información vital sin consecuencias. Conoce tus derechos antes de que sea tarde.
          </p>
        </div>
      </div>

      {/* Grid de Contenido Principal */}
      <main className="max-w-6xl mx-auto px-4 relative z-10 space-y-24">
        
        {/* Sección: ¿Qué se considera dato? */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Fingerprint className="text-red-600 w-8 h-8" />
              Tu Huella Hemática Digital
            </h2>
            <p className="text-gray-400">
              Cualquier información que te identifique o te haga identificable es considerada un dato personal. Algunos son tan críticos como tu tipo de sangre: <strong>Los Datos Sensibles</strong>.
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Datos Básicos', desc: 'RUT, Nombre, Dirección, Correo.', color: 'border-gray-700' },
                { label: 'Datos Sensibles', desc: 'Salud, Biometría, Ideología política, Origen racial.', color: 'border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]' }
              ].map((item, i) => (
                <li key={i} className={`p-4 bg-neutral-900/50 border-l-4 ${item.color} rounded-r-lg hover:bg-neutral-900 transition-colors`}>
                  <strong className="block text-white mb-1">{item.label}</strong>
                  <span className="text-sm text-gray-500">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 bg-neutral-900/30 rounded-2xl border border-red-900/30 overflow-hidden flex items-center justify-center group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
             <ShieldAlert className="w-40 h-40 text-red-900/20 absolute group-hover:text-red-900/40 transition-colors duration-700" />
             <ServerCrash className="w-20 h-20 text-red-600 relative z-10 animate-pulse" />
          </div>
        </section>

        {/* Sección: Derechos ARCO (El Escudo) */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">El Torniquete: Derechos ARCO</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              La ley te otorga 4 herramientas fundamentales para detener la hemorragia de tu información en bases de datos de terceros.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Acceso', icon: EyeOff, desc: 'Derecho a saber qué datos tuyos tienen y para qué los usan.' },
              { title: 'Rectificación', icon: FileWarning, desc: 'Derecho a corregir datos falsos, inexactos o incompletos.' },
              { title: 'Cancelación', icon: ServerCrash, desc: 'Derecho a exigir que eliminen tus datos si ya no hay base legal.' },
              { title: 'Oposición', icon: AlertOctagon, desc: 'Derecho a negarte a que usen tus datos para ciertos fines (ej. marketing).' }
            ].map((derecho, i) => (
              <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl relative overflow-hidden group hover:border-red-700 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-900/10 rounded-bl-full -z-10 group-hover:bg-red-600/20 transition-colors"></div>
                <derecho.icon className="w-10 h-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{derecho.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{derecho.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: La Nueva Ley y Sanciones (El Castigo) */}
        <section className="bg-gradient-to-br from-neutral-900 to-black border border-red-900/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-6 animate-pulse">
                <Scale className="w-3 h-3" />
                NUEVA INSTITUCIONALIDAD
              </div>
              <h2 className="text-3xl font-black text-white mb-4">El Fin de la Impunidad</h2>
              <p className="text-gray-400 mb-6">
                La nueva actualización a la ley crea la <strong>Agencia de Protección de Datos Personales</strong>, un ente fiscalizador con "dientes" reales para multar a quienes trafiquen con tu información sin tu consentimiento explícito.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  Consentimiento debe ser inequívoco y previo.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  Portabilidad de datos entre servicios.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  Denuncias directas ante la nueva Agencia.
                </li>
              </ul>
            </div>

            {/* Gráfico de Multas */}
            <div className="flex flex-col justify-center space-y-6 bg-black/50 p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-red-500 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <AlertOctagon className="w-4 h-4" /> 
                Gravedad de Infracciones
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Leves</span>
                    <span className="text-white font-mono">Hasta 5.000 UTM</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div className="bg-red-900 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Graves</span>
                    <span className="text-white font-mono">Hasta 10.000 UTM</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div className="bg-red-700 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Gravísimas</span>
                    <span className="text-white font-mono">Hasta 20.000 UTM</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-red-500 rounded-full animate-pulse opacity-50"></div>
                    <div className="bg-red-600 h-2 rounded-full relative z-10" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 mt-24 text-center border-t border-neutral-900 pt-8">
        <Droplet className="w-6 h-6 text-red-900 mx-auto mb-4" />
        <p className="text-gray-600 text-sm font-mono">
          "La privacidad no es una opción, es un derecho fundamental."
        </p>
        <p className="text-neutral-700 text-xs mt-2">
          Infografía basada en la legislación vigente de Chile (Ley N° 19.628 y sus modernizaciones).
        </p>
      </footer>
    </div>
  );
}
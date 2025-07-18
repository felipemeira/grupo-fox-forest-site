import React, { useState } from 'react';
import './App.css';
import { ChevronDown, ChevronUp, Building, Leaf, Users, Award, Target, Eye, Heart, TrendingUp, CheckCircle, Phone, Mail, Globe, Calendar, MapPin } from 'lucide-react';

// Importando imagens
// Logomarcas
import logoImage from './assets/image_0.png';
import grupoFoxLogo from './assets/grupofox.png';
import forestLogo from './assets/forest.png';
import foxLogLogo from './assets/foxlog.png';

// Imagens de serviços
import serviceImage1 from './assets/image_12.png'; // Maquinário florestal
import serviceImage2 from './assets/image_15.png'; // Infraestrutura
import serviceImage3 from './assets/image_18.png'; // Projetos
import serviceImage4 from './assets/image_22.png'; // Operações
import serviceImage5 from './assets/image_25.png'; // Equipamentos
import serviceImage6 from './assets/image_28.png'; // Trabalhos
import serviceImage7 from './assets/image_4.png'; // Retaludamento
import serviceImage8 from './assets/image_8.png'; // Foto aeria
import serviceImage9 from './assets/image_13.png'; // Foto aeria
import serviceImage10 from './assets/image_21.png'; // Forwarder
import serviceImage11 from './assets/image_26.png'; // Forwarder

// Logos de clientes

import clientLogo1 from './assets/image_60.png'; // Guanhães Energia
import clientLogo2 from './assets/image_64.png'; // Suzano
import clientLogo3 from './assets/image_77.png'; // IPÊ Mineração
import clientLogo4 from './assets/image_61.png'; // Norte Energia
import clientLogo5 from './assets/image_62.png'; // CEMIG
import clientLogo6 from './assets/image_63.png'; // ESBR
import clientLogo7 from './assets/image_65.png'; // GUSA
import clientLogo8 from './assets/image_66.png'; // Via 040
import clientLogo9 from './assets/image_67.png'; // U&M
import clientLogo10 from './assets/image_70.png'; // CPFL
import clientLogo11 from './assets/image_73.png'; // SINOP
import clientLogo12 from './assets/image_57.png'; // Santo Antônio
import clientLogo13 from './assets/image_58.png'; // Furnas
import clientLogo14 from './assets/image_59.png'; // Sefac
import clientLogo15 from './assets/image_76.png'; // CanadianSolar
import clientLogo16 from './assets/image_74.png'; // Gerdau
import clientLogo17 from './assets/image_78.png'; // Acelor
import clientLogo18 from './assets/image_75.png'; // Duratex
import clientLogo19 from './assets/image_69.png'; // Plantar
import clientLogo20 from './assets/image_72.png'; // Egir
import clientLogo21 from './assets/image_71.png'; // Biocarbono
import clientLogo22 from './assets/image_68.png'; // Viena

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timelineData = [
    {
      period: '2004-2006',
      title: 'Projetos',
      description: 'Início das atividades com foco em infraestrutura e recuperação ambiental',
      events: [
        { year: '2004', event: 'Fundação da Empresa', description: 'Início das operações com visão sustentável' },
        { year: '2005', event: 'UHE Irapé', description: 'Primeiro grande projeto em usina hidrelétrica' },
        { year: '2006', event: 'UHE Peixe', description: 'Consolidação no setor energético' }
      ],
      activities: ['Abertura e Recuperação de Acesso', 'Construção de Escolas', 'Sistemas de Abastecimento de Água', 'Mecanização Agrícola', 'Contenção de Encosta', 'Supressão Vegetal'],
      image: serviceImage7,
      stats: { projects: '3', clients: '2', areas: '500 ha' }
    },
    {
      period: '2009-2013',
      title: 'Crescimento significativo com projetos de grande porte',
      description: 'Expansão para novos estados e participação em megaprojetos',
      events: [
        { year: '2009', event: 'UHE Serra do Facão', description: 'Expansão para novos estados' },
        { year: '2010', event: 'UHE Santo Antônio', description: 'Participação em megaprojeto amazônico' },
        { year: '2013', event: 'UHE Jirau', description: 'Consolidação na região Norte' }
      ],
      activities: ['Supressão Vegetal Semimecanizada', 'Supressão Vegetal Mecanizada', 'Corte e Traçamento', 'Baldeio e Transporte', 'Empilhamento e Destinação de Resíduo'],
      image: serviceImage8,
      stats: { projects: '8', clients: '5', areas: '1.200 ha' }
    },
    {
      period: '2014-2016',
      title: 'Ampliação do portfólio com novos serviços especializados',
      description: 'Entrada em novos segmentos e diversificação de clientes',
      events: [
        { year: '2014', event: 'PCH Senhora do Porto, PCH Dores de Guanhães', description: 'Entrada no segmento de PCHs' },
        { year: '2015', event: 'PCH Jacaré, UHE Belo Monte', description: 'Participação no maior projeto hidrelétrico brasileiro' },
        { year: '2016', event: 'VIA 040, Mineração Vale', description: 'Diversificação para rodovias e mineração' }
      ],
      activities: ['Supressão Vegetal', 'Roçada Pesada', 'Destocamento', 'Revegetação', 'Hidrossemeadura'],
      image: serviceImage9,
      stats: { projects: '12', clients: '8', areas: '2.000 ha' }
    },
    {
      period: '2017-2023',
      title: 'Projetos Recentes e Atuais',
      description: 'Consolidação como referência nacional em soluções sustentáveis',
      events: [
        { year: '2017-2020', event: 'UHE Sinop, Mineração Ipê, Gerdau, Duratex', description: 'Diversificação de clientes industriais' },
        { year: '2021-2023', event: 'LT Janaúba Pirapora, Colheita Florestal Semi-Mecanizada', description: 'Entrada no setor de transmissão' },
        { year: '2024-2023', event: 'Mineração Ipê, Canadian, UFV Lavras', description: 'Expansão nacional continuada' }
      ],
      activities: ['Supressão de Vegetação', 'Destocamento', 'Colheita Florestal'],
      image: serviceImage3,
      stats: { projects: '25+', clients: '15+', areas: '5.000+ ha' }
    },
    {
      period: '2024',
      title: 'Ampliação do portfólio com novos serviços especializados',
      description: 'Entrada em novos segmentos e diversificação de clientes',
      events: [
        { year: '2024', event: 'NeoEnergia - LT Vale do Itajai', description: 'XXX' },
        { year: '2024', event: 'Siderurgicas', description: 'XXX' },
        { year: '2024', event: 'VIA 040, Mineração Vale', description: 'Diversificação para rodovias e mineração' }
      ],
      activities: ['Supressão Vegetal', 'Destocamento'],
      image: serviceImage10,
      stats: { projects: '12', clients: '8', areas: '2.000 ha' }
    },
    {
      period: '2025',
      title: 'Projetos Recentes e Atuais',
      description: 'Consolidação como referência nacional em soluções sustentáveis',
      events: [
        { year: 'Atual', event: 'NeoEnergia - LT Vale do Itajai', description: 'XX' },
        { year: 'Atual', event: 'Mineração Ipê, Canadian, UFV Lavras', description: 'Expansão nacional continuada' }
      ],
      activities: ['Supressão de Vegetação', 'Destocamento', 'PRAD'],
      image: serviceImage11,
      stats: { projects: '25+', clients: '15+', areas: '5.000+ ha' }
    }
  ];

  const services = {
    infrastructure: [
      { name: 'Recuperação de Estradas', icon: '🛣️', image: serviceImage2 },
      { name: 'Retaludamento', icon: '⛰️', image: serviceImage3 },
      { name: 'Hidrossemeadura', icon: '🌱', image: serviceImage4 },
      { name: 'Aplicação de Biomanta', icon: '🍃', image: serviceImage5 }
    ],
    forestry: [
      { name: 'Supressão Vegetal Semimecanizada', icon: '🌳', image: serviceImage1 },
      { name: 'Supressão Vegetal Mecanizada', icon: '🚜', image: serviceImage3 },
      { name: 'Transporte Florestal', icon: '🛻', image: serviceImage4 },
      { name: 'Colheita Florestal', icon: '🌲', image: serviceImage1 },
      { name: 'PRAD', icon: '🌳', image: serviceImage6 }
    ]
  };

  const clients = [
    { name: 'CEMIG', logo: clientLogo5 },
    { name: 'Guanhães Energia', logo: clientLogo1 },
    { name: 'CPFL', logo: clientLogo10 },
    { name: 'Sinop Energia', logo: clientLogo11 },
    { name: 'Norte Energia', logo: clientLogo4 },
    { name: 'Furnas', logo: clientLogo13 },
    { name: 'CanadianSolar', logo: clientLogo15 },
    { name: 'Sefac', logo: clientLogo14 },
    { name: 'Santo Antônio Energia', logo: clientLogo12 },
    { name: 'ESBR', logo: clientLogo6 },
    { name: 'U&M', logo: clientLogo9 },
    { name: 'Gerdau', logo: clientLogo16 },
    { name: 'BioFlorestas', logo: clientLogo17 },
    { name: 'Ipê Mineração', logo: clientLogo3 },
    { name: 'Duratex', logo: clientLogo18 },
    { name: 'Gusa', logo: clientLogo7 },
    { name: 'Suzano', logo: clientLogo2 },
    { name: 'Via 040', logo: clientLogo8 },
    { name: 'Plantar', logo: clientLogo19 },
    { name: 'Egir', logo: clientLogo20 },
    { name: 'Biocarbono', logo: clientLogo21 },
    { name: 'Viena', logo: clientLogo22 },


  ];

  const values = [
    { name: 'ÉTICA', icon: <Award className="w-6 h-6" /> },
    { name: 'LEALDADE', icon: <Heart className="w-6 h-6" /> },
    { name: 'RESPEITO ÀS PESSOAS', icon: <Users className="w-6 h-6" /> },
    { name: 'FOCO NO RESULTADO', icon: <Target className="w-6 h-6" /> },
    { name: 'QUALIDADE EM TUDO QUE FAZ', icon: <Award className="w-6 h-6" /> },
    { name: 'EVOLUÇÃO CONTÍNUA', icon: <TrendingUp className="w-6 h-6" /> },
    { name: 'SUSTENTABILIDADE', icon: <Leaf className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={grupoFoxLogo} alt="Grupo Fox" className="h-12 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'timeline', 'services', 'clients', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section
                        ? 'text-white bg-[#453E17]'
                        : 'text-gray-700 hover:text-[#453E17] hover:bg-[#9CA856]/10'
                    }`}
                  >
                    {section === 'home' && 'Início'}
                    {section === 'about' && 'Sobre'}
                    {section === 'timeline' && 'História'}
                    {section === 'services' && 'Serviços'}
                    {section === 'clients' && 'Clientes'}
                    {section === 'contact' && 'Contato'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#453E17] via-[#9CA856] to-[#453E17]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          {/* Logos lado a lado */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <img src={forestLogo} alt="Forest" className="h-24 w-auto filter drop-shadow-lg" />
            <img src={foxLogLogo} alt="Fox Log" className="h-24 w-auto filter drop-shadow-lg" />
          </div>
          

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
            Soluções Sustentáveis para Infraestrutura com Rentabilidade, Qualidade e Desenvolvimento Humano
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-[#9CA856] hover:bg-[#453E17] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Conheça Nossa História
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#453E17] mb-4">Missão, Visão e Valores</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#453E17] to-[#9CA856] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#9CA856] hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#453E17] rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#453E17]">Missão</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "PROVER SOLUÇÕES SUSTENTÁVEIS EM NEGÓCIOS DE INFRAESTRUTURA COM RENTABILIDADE, QUALIDADE E DESENVOLVIMENTO HUMANO"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#9CA856] hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#453E17] rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#453E17]">Visão 2030</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "SER RECONHECIDA COMO MELHOR OPÇÃO E REFERÊNCIA NOS NEGÓCIOS EM QUE ATUA, PELOS CLIENTES, COLABORADORES, FORNECEDORES E COMUNIDADE"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#9CA856] hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#453E17] rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#453E17]">Valores</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="text-[#9CA856] mr-2">{value.icon}</div>
                    <span className="font-medium">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Redesigned */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#453E17] mb-4">Nossa História</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#453E17] to-[#9CA856] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Mais de 20 anos construindo o futuro sustentável do Brasil</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#453E17] via-[#9CA856] to-[#453E17] hidden md:block"></div>
            
            <div className="space-y-16">
              {timelineData.map((period, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#9CA856] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="md:w-5/12">
                      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-r from-[#453E17] to-[#9CA856] text-white px-4 py-2 rounded-lg font-bold text-lg mr-4">
                            {period.period}
                          </div>
                          <Calendar className="w-5 h-5 text-[#9CA856]" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-[#453E17] mb-3">{period.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{period.description}</p>
                        

                        
                        {/* Key Events */}
                        <div className="space-y-3">
                          <h4 className="font-bold text-[#453E17] flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            Principais Marcos
                          </h4>
                          {period.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex items-start bg-white p-3 rounded-lg border-l-4 border-[#9CA856]">
                              <div className="bg-[#453E17] text-white text-xs px-2 py-1 rounded font-bold mr-3 mt-1 flex-shrink-0">
                                {event.year}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-800 text-sm">{event.event}</div>
                                <div className="text-gray-600 text-xs mt-1">{event.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="md:w-2/12 flex justify-center">
                      <div className="relative group">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#9CA856] group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={period.image} 
                            alt={`Projeto ${period.period}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#453E17]/20 to-transparent rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Activities */}
                    <div className="md:w-5/12">
                      <div className="bg-gradient-to-br from-[#453E17] to-[#9CA856] text-white p-8 rounded-xl shadow-lg">
                        <h4 className="text-xl font-bold mb-6 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Atividades Realizadas
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {period.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-[#9CA856] mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Summary */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#453E17] to-[#9CA856] text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">20+ Anos de Excelência</h3>
              <p className="text-lg mb-6">Uma trajetória de soluções para infraestrutura de energia, mineração, construção e siderurgia</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">22+</div>
                  <div className="text-sm opacity-90">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">13</div>
                  <div className="text-sm opacity-90">Estados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">520</div>
                  <div className="text-sm opacity-90">PRAD</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">2.790.000m³</div>
                  <div className="text-sm opacity-90">Colheira Florestal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">11.197 ha</div>
                  <div className="text-sm opacity-90">Trabalhados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#453E17] mb-4">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#453E17] to-[#9CA856] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Soluções completas para infraestrutura e manejo florestal</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#453E17]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#453E17] rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#453E17]">Infraestrutura</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {services.infrastructure.map((service, index) => (
                  <div key={index} className="group flex items-center p-4 bg-gray-50 rounded-lg hover:bg-[#9CA856]/10 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <span className="text-gray-700 font-medium">{service.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#9CA856]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#9CA856] rounded-full flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#453E17]">Manejo Florestal</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {services.forestry.map((service, index) => (
                  <div key={index} className="group flex items-center p-4 bg-gray-50 rounded-lg hover:bg-[#453E17]/10 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <span className="text-gray-700 font-medium">{service.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#453E17] mb-4">Nossos Clientes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#453E17] to-[#9CA856] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Principais parceiros e clientes que confiam em nosso trabalho</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {clients.map((client, index) => (
              <div key={index} className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#9CA856]">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-10 mb-4 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-[#453E17] text-center text-sm">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#453E17] to-[#9CA856] text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Mais de 20 Anos de Confiança</h3>
              <p className="text-lg">Trabalhamos com os principais players do mercado de infraestrutura e energia do Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#453E17] via-[#9CA856] to-[#453E17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={grupoFoxLogo} alt="Grupo Fox" className="mx-auto mb-8 h-24 w-auto filter drop-shadow-lg" />
          <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Soluções Sustentáveis para Infraestrutura com Rentabilidade, Qualidade e Desenvolvimento Humano
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Globe className="w-12 h-12 mb-4 text-[#9CA856]" />
              <h3 className="text-lg font-bold mb-2">Website</h3>
              <p>www.forest.srv.br</p>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Mail className="w-12 h-12 mb-4 text-[#9CA856]" />
              <h3 className="text-lg font-bold mb-2">E-mail</h3>
              <p>contato@grupofoxforest.com.br</p>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Phone className="w-12 h-12 mb-4 text-[#9CA856]" />
              <h3 className="text-lg font-bold mb-2">Telefone</h3>
              <p>(31) 3333-4444</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#453E17] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Grupo Fox. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;


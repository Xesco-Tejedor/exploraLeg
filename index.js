import React, { useState, useEffect } from 'react';
const { useStoredState } = hatch;

const ExplorerLegadosArtisticos = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [generatedWorks, setGeneratedWorks] = useStoredState('generated_works', {});
  const [currentView, setCurrentView] = useState('search');
  const [isSearching, setIsSearching] = useState(false);
  const [imageModal, setImageModal] = useState(null);
  const [worksStatus, setWorksStatus] = useState({});
  const [forceRender, setForceRender] = useState(0);
  const [localWorkCache, setLocalWorkCache] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingWorks, setGeneratingWorks] = useState(new Set());

  // Sincronizar estado cuando se actualice generatedWorks
  useEffect(() => {
    if (selectedArtist && selectedArtist.name) {
      const currentArtistWorks = Object.keys(generatedWorks).filter(key => 
        key.startsWith(selectedArtist.name)
      );
      
      if (currentArtistWorks.length > 0) {
        setLocalWorkCache(prev => {
          const updated = { ...prev };
          currentArtistWorks.forEach(key => {
            if (generatedWorks[key]) {
              updated[key] = generatedWorks[key];
            }
          });
          return updated;
        });
        
        setForceRender(prev => prev + 1);
      }
    }
  }, [generatedWorks, selectedArtist]);

  // Base de datos de artistas
  const artistsDatabase = {
    'Vincent van Gogh': {
      bio: 'Pintor postimpresionista neerlandés cuya obra influyó profundamente en el arte del siglo XX',
      style: 'Pinceladas expresivas, colores vibrantes y técnica impasto característica',
      futureWorks: [
        {
          title: 'Campos de Energía Solar Bajo Cielos Turbulentos',
          description: 'Una proyección de cómo Van Gogh habría representado la energía renovable con su característico dinamismo visual',
          era: '2024',
          medium: 'Óleo sobre lienzo con técnica impasto'
        },
        {
          title: 'Autorretrato con Dispositivos de Realidad Virtual',
          description: 'Exploración de la introspección digital con la intensidad emocional característica del artista',
          era: '2024',
          medium: 'Óleo sobre lienzo'
        },
        {
          title: 'Cipreses Holográficos en Paisaje Marciano',
          description: 'Fusión de su amor por los cipreses con la exploración espacial contemporánea',
          era: '2024',
          medium: 'Óleo sobre lienzo con efectos luminosos'
        }
      ]
    },
    'Pablo Picasso': {
      bio: 'Pintor y escultor español, cofundador del cubismo y una de las figuras más influyentes del arte moderno',
      style: 'Deconstrucción formal, múltiples perspectivas y reinvención constante del lenguaje visual',
      futureWorks: [
        {
          title: 'Guernica Cibernética: Fragmentación Digital de la Guerra',
          description: 'Reinterpretación del horror bélico a través de la deshumanización tecnológica',
          era: '2024',
          medium: 'Técnica mixta digital y óleo'
        },
        {
          title: 'Les Demoiselles d\'Avignon Globales',
          description: 'Deconstrucción de la identidad en la era de la conectividad global',
          era: '2024',
          medium: 'Collage digital y pintura'
        },
        {
          title: 'Minotauro Digital en Laberinto de Datos',
          description: 'Exploración de la mitología personal en el contexto de la era de la información',
          era: '2024',
          medium: 'Escultura digital y pintura'
        }
      ]
    },
    'Frida Kahlo': {
      bio: 'Pintora mexicana conocida por sus autorretratos y obras que exploran identidad, dolor y cultura mexicana',
      style: 'Realismo mágico, simbolismo personal y fusión de tradición mexicana con elementos surrealistas',
      futureWorks: [
        {
          title: 'Autorretrato con Columna Vertebral Biónica',
          description: 'Exploración de la integración entre cuerpo humano y tecnología médica avanzada',
          era: '2024',
          medium: 'Óleo sobre tabla con elementos holográficos'
        },
        {
          title: 'Las Dos Fridas: Carne y Algoritmo',
          description: 'Dualidad entre identidad orgánica y digital en la era de la inteligencia artificial',
          era: '2024',
          medium: 'Óleo sobre lienzo con interfaces digitales'
        },
        {
          title: 'Viva la Vida: Jardín Hidropónico Espacial',
          description: 'Celebración de la vida a través de la agricultura espacial y la sostenibilidad',
          era: '2024',
          medium: 'Óleo sobre lienzo con elementos bioluminiscentes'
        }
      ]
    },
    'Salvador Dalí': {
      bio: 'Artista surrealista español conocido por sus imágenes oníricas y técnica paranoico-crítica',
      style: 'Surrealismo, hiperrealismo técnico y método paranoico-crítico para acceder al inconsciente',
      futureWorks: [
        {
          title: 'La Persistencia de la Memoria Cuántica',
          description: 'Exploración del tiempo en la era de la computación cuántica y la relatividad digital',
          era: '2024',
          medium: 'Óleo sobre lienzo con elementos holográficos'
        },
        {
          title: 'Metamorfosis del Narciso Cibernético',
          description: 'Transformación de la identidad en la era de las redes sociales y la realidad virtual',
          era: '2024',
          medium: 'Técnica mixta con realidad aumentada'
        },
        {
          title: 'Sueño Causado por el Vuelo de una Inteligencia Artificial',
          description: 'Exploración de los sueños generados por algoritmos y la consciencia artificial',
          era: '2024',
          medium: 'Óleo sobre lienzo con algoritmos visuales'
        }
      ]
    },
    'Leonardo da Vinci': {
      bio: 'Genio renacentista italiano: pintor, inventor, científico y anatomista, epítome del hombre universal',
      style: 'Técnica sfumato, observación científica y fusión perfecta entre arte y ciencia',
      futureWorks: [
        {
          title: 'La Gioconda Cuántica: Retrato en Múltiples Estados',
          description: 'Exploración del retrato en la era de la superposición cuántica y la realidad múltiple',
          era: '2024',
          medium: 'Óleo sobre tabla con interfaces cuánticas'
        },
        {
          title: 'Estudios de Máquina Voladora Interplanetaria',
          description: 'Evolución de sus diseños de vuelo hacia la exploración espacial contemporánea',
          era: '2024',
          medium: 'Tinta y óleo sobre papel con esquemas holográficos'
        },
        {
          title: 'Hombre de Vitruvio Cibernético: Nuevas Proporciones',
          description: 'Redefinición de las proporciones humanas en la era de la augmentación tecnológica',
          era: '2024',
          medium: 'Técnica mixta con mediciones biométricas'
        }
      ]
    }
  };

  const generateCustomArtistWorks = (artistName) => {
    return [
      {
        title: `Visión Futurista de ${artistName} I`,
        description: `Una proyección contemporánea del estilo característico de ${artistName} aplicado a temáticas del siglo XXI`,
        era: '2024',
        medium: 'Técnica mixta contemporánea'
      },
      {
        title: `Legado Digital de ${artistName}`,
        description: `Interpretación de cómo ${artistName} habría abordado la revolución digital`,
        era: '2024',
        medium: 'Arte digital y medios tradicionales'
      },
      {
        title: `${artistName} y la Sostenibilidad`,
        description: `Exploración de las preocupaciones ambientales contemporáneas a través de la visión de ${artistName}`,
        era: '2024',
        medium: 'Materiales sostenibles y técnicas tradicionales'
      }
    ];
  };

  const generateImage = async (prompt, imageKey) => {
    try {
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2, 15);
      const uniqueId = `art_${imageKey}_${timestamp}_${randomId}`;
      
      const imageUrl = `keys/${uniqueId}?prompt=${encodeURIComponent(prompt)}`;
      
      const newWork = {
        url: imageUrl,
        generated: true,
        title: prompt.split('.')[0],
        description: prompt,
        timestamp: timestamp,
        imageKey: imageKey
      };
      
      return newWork;
    } catch (error) {
      console.error(`Error generando imagen para ${imageKey}:`, error);
      throw error;
    }
  };

  const handleArtistSearch = async (name) => {
    if (!name || !name.trim()) return;
    
    setIsSearching(true);
    setGeneratingWorks(new Set());
    setWorksStatus({});
    
    try {
      let artist = artistsDatabase[name];
      
      if (!artist) {
        artist = {
          bio: `Artista histórico cuyo legado trasciende épocas`,
          style: 'Técnica magistral y visión artística innovadora',
          futureWorks: generateCustomArtistWorks(name)
        };
      }
      
      setSelectedArtist({ name, ...artist });
      setCurrentView('gallery');
      setIsGenerating(true);
      
      const initialWorksStatus = {};
      const initialLocalCache = {};
      
      for (let i = 0; i < artist.futureWorks.length; i++) {
        const imageKey = `${name}_work_${i}`;
        const existingWork = generatedWorks[imageKey];
        
        if (existingWork) {
          initialWorksStatus[imageKey] = 'completed';
          initialLocalCache[imageKey] = existingWork;
        } else {
          initialWorksStatus[imageKey] = 'pending';
        }
      }
      
      setWorksStatus(initialWorksStatus);
      setLocalWorkCache(initialLocalCache);
      
      const generateAllWorks = async () => {
        for (let workIndex = 0; workIndex < artist.futureWorks.length; workIndex++) {
          const work = artist.futureWorks[workIndex];
          const imageKey = `${name}_work_${workIndex}`;
          
          if (generatedWorks[imageKey]) {
            continue;
          }
          
          setGeneratingWorks(prev => new Set([...prev, imageKey]));
          setWorksStatus(prev => ({
            ...prev,
            [imageKey]: 'generating'
          }));
          
          try {
            const prompt = `${work.description}. Estilo artístico de ${name}, ${artist.style}. Técnica: ${work.medium}. Época: ${work.era}. Composición artística profesional, alta calidad estética.`;
            
            const newWork = await generateImage(prompt, imageKey);
            
            setGeneratedWorks(prev => ({
              ...prev,
              [imageKey]: newWork
            }));
            
            setLocalWorkCache(prev => ({
              ...prev,
              [imageKey]: newWork
            }));
            
            setWorksStatus(prev => ({
              ...prev,
              [imageKey]: 'completed'
            }));
            
            setTimeout(() => {
              setForceRender(prev => prev + 1);
            }, 100);
            
            setTimeout(() => {
              setGeneratingWorks(prev => {
                const newSet = new Set(prev);
                newSet.delete(imageKey);
                return newSet;
              });
              
              setForceRender(prev => prev + 1);
            }, 1000);
            
          } catch (error) {
            console.error(`Error generando obra ${workIndex + 1}:`, error);
            setWorksStatus(prev => ({
              ...prev,
              [imageKey]: 'error'
            }));
            
            setGeneratingWorks(prev => {
              const newSet = new Set(prev);
              newSet.delete(imageKey);
              return newSet;
            });
          }
          
          if (workIndex < artist.futureWorks.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 4000));
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        setForceRender(prev => prev + 1);
      };
      
      await generateAllWorks();
      
      setIsGenerating(false);
      
    } catch (error) {
      console.error('Error en búsqueda:', error);
      setIsGenerating(false);
    } finally {
      setIsSearching(false);
    }
  };

  const handleImageClick = (generatedWork, originalWork) => {
    if (!generatedWork || !generatedWork.url || !originalWork) {
      return;
    }
    
    setImageModal({
      url: generatedWork.url,
      title: originalWork.title || 'Obra sin título',
      description: originalWork.description || 'Descripción no disponible',
      era: originalWork.era || 'Época desconocida',
      medium: originalWork.medium || 'Técnica no especificada'
    });
  };

  const handleDownload = async (imageUrl, title) => {
    if (!imageUrl) {
      return;
    }
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const fileName = (title || 'imagen_generada').replace(/\s+/g, '_');
      link.download = `${fileName}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
    }
  };

  const featuredArtists = [
    { name: 'Vincent van Gogh', period: '1853-1890', style: 'Postimpresionismo' },
    { name: 'Pablo Picasso', period: '1881-1973', style: 'Cubismo' },
    { name: 'Frida Kahlo', period: '1907-1954', style: 'Surrealismo mexicano' },
    { name: 'Salvador Dalí', period: '1904-1989', style: 'Surrealismo' },
    { name: 'Leonardo da Vinci', period: '1452-1519', style: 'Renacimiento' }
  ];

  if (currentView === 'search') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064e3b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 p-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              🎨 Explorador de Legados Artísticos
            </h1>
            <p className="text-xl text-cyan-200 font-light tracking-wide">
              ¿Y si los grandes maestros hubieran vivido en nuestra época?
            </p>
            <div className="mt-4 h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-300">
                🔍 Buscar Artista
              </h2>
              
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Ingresa el nombre de un artista histórico..."
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-700/50 border border-cyan-500/50 text-white placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleArtistSearch(searchTerm);
                    }
                  }}
                />
                <button
                  onClick={() => handleArtistSearch(searchTerm)}
                  disabled={isSearching}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50"
                >
                  {isSearching ? '🔍 Buscando...' : '🎨 Explorar'}
                </button>
              </div>
              
              <p className="text-center text-cyan-300/70 text-sm">
                Explora cómo cualquier artista histórico habría creado en 2024
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-300">
              ✨ Artistas Destacados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArtists.map((artist, index) => (
                <div
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 hover:border-pink-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
                  onClick={() => handleArtistSearch(artist.name)}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                      {artist.name}
                    </h3>
                    <p className="text-purple-400 text-sm mb-2">
                      {artist.period}
                    </p>
                    <p className="text-cyan-200/70 text-sm">
                      {artist.style}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'gallery' && selectedArtist) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
        
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedArtist.name}
                </h1>
                <p className="text-cyan-300 text-lg">
                  {selectedArtist.style}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-cyan-300/70">
                    Obras generadas: {Object.keys(generatedWorks).length} | 
                    Generando: {generatingWorks.size} | 
                    Render: {forceRender}
                  </p>
                  {isGenerating && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                      <span className="text-cyan-400">Generando obras...</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    setCurrentView('search');
                    setSelectedArtist(null);
                    setIsGenerating(false);
                    setGeneratingWorks(new Set());
                    setWorksStatus({});
                  }}
                  className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-cyan-100 px-4 py-2 rounded-lg transition-all duration-300 border border-cyan-500/50 hover:shadow-cyan-500/50 hover:shadow-lg ml-4"
                >
                  ← Volver
                </button>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-cyan-500/30">
              <p className="text-cyan-200 leading-relaxed">
                {selectedArtist.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" key={forceRender}>
              {selectedArtist.futureWorks && selectedArtist.futureWorks.map((work, index) => {
                const imageKey = `${selectedArtist.name}_work_${index}`;
                const generatedWork = localWorkCache[imageKey] || generatedWorks[imageKey];
                const isGeneratingThisWork = generatingWorks.has(imageKey);
                const workStatus = worksStatus[imageKey] || 'pending';
                
                return (
                  <div key={`${imageKey}_${forceRender}`} className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl hover:border-pink-500/50 transition-all duration-300">
                    <div className="aspect-video bg-slate-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-cyan-400/30">
                      {generatedWork && (workStatus === 'completed' || generatedWork.generated) ? (
                        <div className="relative w-full h-full">
                          <img
                            src={generatedWork.url}
                            alt={work.title}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
                            onClick={() => handleImageClick(generatedWork, work)}
                          />
                          <div className="absolute top-2 right-2 bg-green-500/80 text-white text-xs px-2 py-1 rounded">
                            ✅ Obra {index + 1}
                          </div>
                        </div>
                      ) : isGeneratingThisWork || workStatus === 'generating' ? (
                        <div className="text-center">
                          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                          <p className="text-cyan-400">Generando Obra {index + 1}...</p>
                        </div>
                      ) : workStatus === 'error' ? (
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-red-400 text-2xl">❌</span>
                          </div>
                          <p className="text-red-400">Error generando imagen</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-cyan-400 text-2xl">🎨</span>
                          </div>
                          <p className="text-cyan-400">Obra {index + 1} pendiente</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-cyan-300">
                        {work.title}
                      </h3>
                      
                      <p className="text-cyan-200/80 text-sm leading-relaxed">
                        {work.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-xs text-cyan-400/60">
                        <span>{work.era}</span>
                        <span>{work.medium}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {imageModal && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-cyan-300">
                  {imageModal.title}
                </h3>
                <button
                  onClick={() => setImageModal(null)}
                  className="text-cyan-400 hover:text-cyan-200 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-4">
                <img
                  src={imageModal.url}
                  alt={imageModal.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-cyan-200">
                  {imageModal.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-cyan-400/60">
                  <span>{imageModal.era}</span>
                  <span>{imageModal.medium}</span>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => handleDownload(imageModal.url, imageModal.title)}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    💾 Descargar
                  </button>
                  <button
                    onClick={() => setImageModal(null)}
                    className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-cyan-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ExplorerLegadosArtisticos;
// ============================================================
// REGULI DE TRANSFER – DECIZIA 360/2020
// rules.js – contine toate datele si logica de cautare
// ============================================================

const UNITATI = [];

// ---------- Penitenciarul Aiud ----------
UNITATI.push({
    id: 'aiud',
    nume: 'Penitenciarul Aiud',
    judeteDeservite: ['Alba', 'Sibiu', 'Hunedoara'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Alba', 'Sibiu', 'Hunedoara'],
                deschis: [],
                semideschis: [],
                inchis: ['Alba', 'Sibiu', 'Mures', 'Brasov', 'Covasna'],
                maxima: ['Alba', 'Sibiu', 'Mures', 'Brasov', 'Covasna', 'Harghita']
            },
            major: {
                arestat: ['Alba', 'Sibiu', 'Hunedoara'],
                deschis: ['Alba', 'Sibiu', 'Mures', 'Brasov', 'Covasna', 'Harghita'],
                semideschis: [],
                inchis: ['Alba', 'Sibiu', 'Mures', 'Brasov', 'Covasna'],
                maxima: ['Alba', 'Sibiu', 'Mures', 'Brasov', 'Covasna', 'Harghita']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Arad ----------
UNITATI.push({
    id: 'arad',
    nume: 'Penitenciarul Arad',
    judeteDeservite: ['Arad', 'Timis', 'Caras-Severin'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Arad'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Arad'],
                deschis: [],
                semideschis: [],
                inchis: ['Arad', 'Timis', 'Hunedoara', 'Alba', 'Caras-Severin', 'Gorj', 'Mehedinti'],
                maxima: ['Arad', 'Timis', 'Hunedoara', 'Alba', 'Caras-Severin', 'Gorj', 'Mehedinti']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                deschis: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                semideschis: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                deschis: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                semideschis: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                inchis: [],
                maxima: []
            }
        }
    }
});

// ---------- Penitenciarul Bacau ----------
UNITATI.push({
    id: 'bacau',
    nume: 'Penitenciarul Bacau',
    judeteDeservite: ['Bacau', 'Neamt'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Bacau', 'Neamt'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Bacau', 'Neamt'],
                deschis: [],
                semideschis: [],
                inchis: ['Botosani', 'Suceava', 'Iasi', 'Neamt', 'Vaslui', 'Bacau', 'Galati', 'Vrancea', 'Braila'],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Botosani', 'Suceava', 'Iasi', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila', 'Bacau', 'Neamt'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Botosani', 'Suceava', 'Iasi', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila', 'Bacau', 'Neamt'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        }
    }
});

// ---------- Penitenciarul Baia Mare ----------
UNITATI.push({
    id: 'baia-mare',
    nume: 'Penitenciarul Baia Mare',
    judeteDeservite: ['Maramures'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Maramures', 'Cluj'],
                semideschis: ['Maramures', 'Cluj'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Bistrita ----------
UNITATI.push({
    id: 'bistrita',
    nume: 'Penitenciarul Bistrita',
    judeteDeservite: ['Bistrita-Nasaud'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Bistrita-Nasaud', 'Cluj'],
                semideschis: ['Bistrita-Nasaud', 'Cluj'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Botosani ----------
UNITATI.push({
    id: 'botosani',
    nume: 'Penitenciarul Botosani',
    judeteDeservite: ['Botosani', 'Suceava'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Botosani', 'Suceava'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Botosani', 'Suceava'],
                deschis: ['Botosani', 'Suceava', 'Iasi'],
                semideschis: ['Botosani', 'Suceava', 'Iasi'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Braila ----------
UNITATI.push({
    id: 'braila',
    nume: 'Penitenciarul Braila',
    judeteDeservite: ['Braila', 'Galati'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Braila', 'Galati'],
                semideschis: ['Braila', 'Galati', 'Buzau'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Bucuresti-Jilava ----------
UNITATI.push({
    id: 'jilava',
    nume: 'Penitenciarul Bucuresti-Jilava',
    judeteDeservite: ['Ilfov', 'Bucuresti'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Bucuresti', 'Ilfov', 'Giurgiu', 'Teleorman'],
                semideschis: ['Bucuresti', 'Ilfov', 'Giurgiu', 'Teleorman'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Bucuresti-Rahova ----------
UNITATI.push({
    id: 'rahova',
    nume: 'Penitenciarul Bucuresti-Rahova',
    judeteDeservite: ['Ilfov', 'Bucuresti'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Ilfov', 'Bucuresti'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Ilfov', 'Bucuresti'],
                deschis: ['Bucuresti', 'Ilfov', 'Giurgiu', 'Teleorman'],
                semideschis: ['Bucuresti', 'Ilfov', 'Giurgiu', 'Teleorman'],
                inchis: ['Bucuresti', 'Ilfov', 'Giurgiu', 'Teleorman'],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Codlea ----------
UNITATI.push({
    id: 'codlea',
    nume: 'Penitenciarul Codlea',
    judeteDeservite: ['Brasov', 'Covasna'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Brasov', 'Covasna'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Brasov', 'Covasna'],
                deschis: ['Brasov', 'Covasna', 'Harghita'],
                semideschis: ['Brasov', 'Covasna', 'Harghita'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Constanta-Poarta Alba ----------
UNITATI.push({
    id: 'constanta',
    nume: 'Penitenciarul Constanta-Poarta Alba',
    judeteDeservite: ['Constanta'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Constanta', 'Tulcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Constanta'],
                deschis: ['Constanta', 'Calarasi'],
                semideschis: ['Constanta', 'Calarasi'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Constanta', 'Calarasi', 'Ialomita', 'Tulcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Constanta', 'Calarasi', 'Ialomita', 'Tulcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        }
    }
});

// ---------- Penitenciarul Craiova ----------
UNITATI.push({
    id: 'craiova',
    nume: 'Penitenciarul Craiova',
    judeteDeservite: ['Dolj', 'Olt', 'Mehedinti', 'Gorj'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Dolj', 'Olt', 'Gorj'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Dolj', 'Olt', 'Gorj'],
                deschis: [],
                semideschis: [],
                inchis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea', 'Arad', 'Timis', 'Caras-Severin'],
                maxima: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea', 'Arad', 'Timis', 'Caras-Severin']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Dolj', 'Olt', 'Mehedinti', 'Gorj'],
                deschis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea'],
                semideschis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea'],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Dolj', 'Olt', 'Mehedinti', 'Gorj'],
                deschis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea'],
                semideschis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea'],
                inchis: [],
                maxima: []
            }
        }
    }
});

// ---------- Penitenciarul Craiova-Pelendava ----------
UNITATI.push({
    id: 'pelendava',
    nume: 'Penitenciarul Craiova-Pelendava',
    judeteDeservite: [],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinti'],
                semideschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinti'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Deva ----------
UNITATI.push({
    id: 'deva',
    nume: 'Penitenciarul Deva',
    judeteDeservite: ['Hunedoara'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Alba', 'Hunedoara', 'Sibiu'],
                semideschis: ['Alba', 'Hunedoara', 'Sibiu'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Drobeta-Turnu Severin ----------
UNITATI.push({
    id: 'drobeta',
    nume: 'Penitenciarul Drobeta-Turnu Severin',
    judeteDeservite: ['Mehedinti'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Mehedinti'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Mehedinti'],
                deschis: ['Mehedinti', 'Dolj', 'Olt', 'Gorj'],
                semideschis: ['Mehedinti', 'Dolj', 'Olt', 'Gorj'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Focsani ----------
UNITATI.push({
    id: 'focsani',
    nume: 'Penitenciarul Focsani',
    judeteDeservite: ['Buzau', 'Vrancea'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Vrancea', 'Buzau'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Vrancea', 'Buzau'],
                deschis: ['Botosani', 'Suceava', 'Iasi', 'Neamt', 'Vaslui', 'Bacau', 'Galati', 'Vrancea', 'Braila'],
                semideschis: [],
                inchis: ['Botosani', 'Suceava', 'Iasi', 'Neamt', 'Vaslui', 'Bacau', 'Galati', 'Vrancea', 'Braila'],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Gaesti ----------
UNITATI.push({
    id: 'gaesti',
    nume: 'Penitenciarul Gaesti',
    judeteDeservite: ['Dambovita'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Prahova', 'Dambovita', 'Arges'],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Galati ----------
UNITATI.push({
    id: 'galati',
    nume: 'Penitenciarul Galati',
    judeteDeservite: ['Galati', 'Braila'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Braila', 'Galati'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Galati', 'Braila'],
                deschis: [],
                semideschis: [],
                inchis: ['Galati', 'Braila', 'Bacau', 'Vaslui'],
                maxima: ['Galati', 'Braila', 'Bacau', 'Vaslui']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Gherla ----------
UNITATI.push({
    id: 'gherla',
    nume: 'Penitenciarul Gherla',
    judeteDeservite: ['Cluj', 'Maramures', 'Bistrita-Nasaud'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Cluj', 'Bistrita-Nasaud', 'Maramures'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Cluj', 'Bistrita-Nasaud', 'Maramures'],
                deschis: [],
                semideschis: [],
                inchis: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Mures', 'Harghita'],
                maxima: ['Cluj', 'Bistrita-Nasaud', 'Mures', 'Maramures']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mures'],
                deschis: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mures', 'Botosani', 'Suceava', 'Iasi', 'Neamt'],
                semideschis: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mures', 'Botosani', 'Suceava', 'Iasi', 'Neamt'],
                inchis: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                maxima: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin']
            },
            major: {
                arestat: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mures'],
                deschis: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mures', 'Botosani', 'Suceava', 'Iasi', 'Neamt'],
                semideschis: ['Cluj', 'Bistrita-Nasaud', 'Maramures', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mures', 'Botosani', 'Suceava', 'Iasi', 'Neamt'],
                inchis: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin'],
                maxima: ['Arad', 'Salaj', 'Satu Mare', 'Bihor', 'Timis', 'Caras-Severin']
            }
        }
    }
});

// ---------- Penitenciarul Giurgiu ----------
UNITATI.push({
    id: 'giurgiu',
    nume: 'Penitenciarul Giurgiu',
    judeteDeservite: ['Giurgiu', 'Teleorman', 'Ilfov', 'Bucuresti'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Giurgiu', 'Teleorman'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Giurgiu', 'Teleorman'],
                deschis: ['Giurgiu', 'Teleorman', 'Ilfov', 'Bucuresti'],
                semideschis: ['Giurgiu', 'Teleorman', 'Ilfov', 'Bucuresti'],
                inchis: ['Giurgiu', 'Teleorman', 'Ilfov', 'Bucuresti'],
                maxima: ['Giurgiu', 'Teleorman', 'Ilfov', 'Constanta', 'Calarasi', 'Ialomita', 'Tulcea', 'Bucuresti']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Iasi ----------
UNITATI.push({
    id: 'iasi',
    nume: 'Penitenciarul Iasi',
    judeteDeservite: ['Iasi', 'Bacau', 'Vaslui', 'Neamt'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Iasi'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Iasi'],
                deschis: ['Iasi', 'Botosani', 'Suceava', 'Bacau', 'Neamt', 'Vaslui'],
                semideschis: [],
                inchis: ['Iasi', 'Suceava', 'Botosani', 'Neamt', 'Bacau', 'Vaslui'],
                maxima: ['Iasi', 'Suceava', 'Botosani', 'Neamt']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Margineni ----------
UNITATI.push({
    id: 'margineni',
    nume: 'Penitenciarul Margineni',
    judeteDeservite: ['Dambovita', 'Prahova'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Dambovita', 'Prahova'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Dambovita', 'Prahova'],
                deschis: ['Dambovita', 'Prahova', 'Buzau', 'Vrancea'],
                semideschis: [],
                inchis: ['Dambovita', 'Prahova', 'Buzau', 'Vrancea'],
                maxima: ['Dambovita', 'Prahova', 'Buzau', 'Vrancea']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Miercurea-Ciuc ----------
UNITATI.push({
    id: 'miercurea',
    nume: 'Penitenciarul Miercurea-Ciuc',
    judeteDeservite: ['Harghita'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Harghita'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Harghita'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Mioveni ----------
UNITATI.push({
    id: 'mioveni',
    nume: 'Penitenciarul Mioveni',
    judeteDeservite: ['Arges', 'Valcea'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Arges', 'Valcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Arges', 'Valcea'],
                deschis: [],
                semideschis: ['Arges', 'Valcea', 'Dambovita'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Arges', 'Valcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Arges', 'Valcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        }
    }
});

// ---------- Penitenciarul Oradea ----------
UNITATI.push({
    id: 'oradea',
    nume: 'Penitenciarul Oradea',
    judeteDeservite: ['Bihor', 'Salaj', 'Satu Mare'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Bihor', 'Salaj', 'Satu Mare'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Bihor', 'Salaj', 'Satu Mare'],
                deschis: ['Bihor', 'Salaj', 'Cluj', 'Satu Mare'],
                semideschis: [],
                inchis: ['Bihor', 'Salaj', 'Cluj', 'Satu Mare'],
                maxima: ['Bihor', 'Salaj', 'Cluj', 'Satu Mare']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Bihor', 'Salaj', 'Satu Mare'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Bihor', 'Salaj', 'Satu Mare'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        }
    }
});

// ---------- Penitenciarul Ploiesti ----------
UNITATI.push({
    id: 'ploiesti',
    nume: 'Penitenciarul Ploiesti',
    judeteDeservite: ['Prahova', 'Dambovita'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Prahova', 'Dambovita', 'Buzau'],
                semideschis: ['Prahova', 'Dambovita', 'Buzau', 'Vrancea'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Ploiesti-Targsorul Nou ----------
UNITATI.push({
    id: 'targsor',
    nume: 'Penitenciarul Ploiesti-Targsorul Nou',
    judeteDeservite: ['Prahova', 'Dambovita', 'Bucuresti', 'Ilfov', 'Brasov', 'Covasna'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: {
                arestat: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Covasna', 'Bucuresti'],
                deschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinti', 'Arges', 'Valcea', 'Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Constanta', 'Calarasi', 'Ialomita', 'Tulcea', 'Covasna', 'Bucuresti', 'Bacau', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila'],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            tanar: {
                arestat: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Covasna', 'Bucuresti'],
                deschis: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Constanta', 'Calarasi', 'Ialomita', 'Tulcea', 'Covasna', 'Bucuresti', 'Bacau', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila'],
                semideschis: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Constanta', 'Calarasi', 'Ialomita', 'Tulcea', 'Covasna', 'Bucuresti', 'Bacau', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila'],
                inchis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea'],
                maxima: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea']
            },
            major: {
                arestat: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Covasna', 'Bucuresti'],
                deschis: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Constanta', 'Calarasi', 'Ialomita', 'Tulcea', 'Covasna', 'Bucuresti', 'Bacau', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila'],
                semideschis: ['Prahova', 'Dambovita', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brasov', 'Constanta', 'Calarasi', 'Ialomita', 'Tulcea', 'Covasna', 'Bucuresti', 'Bacau', 'Vaslui', 'Vrancea', 'Buzau', 'Galati', 'Braila'],
                inchis: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea'],
                maxima: ['Dolj', 'Olt', 'Mehedinti', 'Gorj', 'Arges', 'Valcea']
            }
        }
    }
});

// ---------- Penitenciarul Satu Mare ----------
UNITATI.push({
    id: 'satu-mare',
    nume: 'Penitenciarul Satu Mare',
    judeteDeservite: ['Satu Mare'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Satu Mare', 'Salaj', 'Bihor'],
                semideschis: ['Satu Mare', 'Salaj', 'Bihor'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Slobozia ----------
UNITATI.push({
    id: 'slobozia',
    nume: 'Penitenciarul Slobozia',
    judeteDeservite: ['Ialomita', 'Calarasi'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Ialomita', 'Calarasi'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Ialomita', 'Calarasi'],
                deschis: ['Calarasi', 'Ialomita', 'Constanta', 'Tulcea'],
                semideschis: [],
                inchis: ['Calarasi', 'Ialomita', 'Constanta', 'Tulcea', 'Buzau'],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Targu Jiu ----------
UNITATI.push({
    id: 'targu-jiu',
    nume: 'Penitenciarul Targu Jiu',
    judeteDeservite: ['Gorj'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: [],
                deschis: ['Gorj', 'Dolj', 'Olt', 'Mehedinti', 'Valcea', 'Arges'],
                semideschis: ['Gorj', 'Dolj', 'Mehedinti', 'Olt', 'Valcea'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Targu Mures ----------
UNITATI.push({
    id: 'targu-mures',
    nume: 'Penitenciarul Targu Mures',
    judeteDeservite: ['Mures'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Mures'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Mures'],
                deschis: ['Mures', 'Harghita'],
                semideschis: ['Mures', 'Harghita'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Timisoara ----------
UNITATI.push({
    id: 'timisoara',
    nume: 'Penitenciarul Timisoara',
    judeteDeservite: ['Timis', 'Caras-Severin'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Timis', 'Caras-Severin'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Timis', 'Caras-Severin'],
                deschis: ['Arad', 'Timis', 'Caras-Severin'],
                semideschis: ['Arad', 'Timis', 'Caras-Severin'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Tulcea ----------
UNITATI.push({
    id: 'tulcea',
    nume: 'Penitenciarul Tulcea',
    judeteDeservite: ['Tulcea'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: {
                arestat: ['Tulcea'],
                deschis: ['Tulcea', 'Braila', 'Galati', 'Ialomita', 'Constanta'],
                semideschis: ['Tulcea', 'Braila', 'Galati', 'Ialomita', 'Constanta', 'Vrancea'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Penitenciarul Vaslui ----------
UNITATI.push({
    id: 'vaslui',
    nume: 'Penitenciarul Vaslui',
    judeteDeservite: ['Vaslui'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Vaslui'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: []
            },
            major: {
                arestat: ['Vaslui'],
                deschis: ['Vaslui', 'Bacau', 'Iasi'],
                semideschis: ['Vaslui', 'Vrancea', 'Bacau', 'Iasi'],
                inchis: [],
                maxima: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    }
});

// ---------- Centre educative / detentie ----------
UNITATI.push({
    id: 'buzias',
    nume: 'Centrul Educativ Buzias',
    judeteDeservite: ['Timis'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    },
    educativ: true,
    educativJudete: ['Satu Mare', 'Maramures', 'Bistrita-Nasaud', 'Mures', 'Sibiu', 'Salaj', 'Alba', 'Arad', 'Timis', 'Caras-Severin', 'Hunedoara', 'Cluj', 'Bihor', 'Gorj', 'Dolj', 'Olt', 'Valcea', 'Mehedinti', 'Arges', 'Giurgiu', 'Teleorman', 'Bucuresti', 'Ilfov']
});

UNITATI.push({
    id: 'tg-ocna',
    nume: 'Centrul Educativ Targu Ocna',
    judeteDeservite: ['Bacau'],
    categorii: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    },
    educativ: true,
    educativJudete: ['Botosani', 'Suceava', 'Iasi', 'Vaslui', 'Bacau', 'Neamt', 'Brasov', 'Covasna', 'Harghita', 'Vrancea', 'Galati', 'Braila', 'Buzau', 'Prahova', 'Ialomita', 'Calarasi', 'Tulcea', 'Constanta', 'Dambovita']
});

UNITATI.push({
    id: 'cd-craiova',
    nume: 'Centrul de Detentie Craiova',
    judeteDeservite: ['Dolj', 'Olt'],
    categorii: {
        masculin: {
            minor: { arestat: ['Dolj', 'Olt', 'Gorj', 'Mehedinti', 'Caras-Severin', 'Timis', 'Arad', 'Arges', 'Valcea', 'Dambovita', 'Hunedoara', 'Alba', 'Sibiu', 'Bihor', 'Salaj', 'Satu Mare', 'Maramures', 'Bistrita-Nasaud', 'Mures', 'Brasov', 'Harghita', 'Covasna', 'Cluj'], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        },
        feminin: {
            minor: { arestat: ['toate'], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    },
    detentie: true,
    detentieJudete: ['Dolj', 'Olt', 'Gorj', 'Mehedinti', 'Caras-Severin', 'Timis', 'Arad', 'Arges', 'Valcea', 'Dambovita', 'Hunedoara', 'Alba', 'Sibiu', 'Bihor', 'Salaj', 'Satu Mare', 'Maramures', 'Bistrita-Nasaud', 'Mures', 'Brasov', 'Harghita', 'Covasna', 'Cluj']
});

UNITATI.push({
    id: 'tichilesti',
    nume: 'Centrul de Detentie Tichilesti',
    judeteDeservite: ['Braila', 'Galati'],
    categorii: {
        masculin: {
            minor: { arestat: ['Braila', 'Galati', 'Tulcea', 'Constanta', 'Ialomita', 'Calarasi', 'Prahova', 'Buzau', 'Vrancea', 'Bacau', 'Neamt', 'Suceava', 'Botosani', 'Iasi', 'Vaslui', 'Giurgiu', 'Teleorman', 'Ilfov', 'Bucuresti'], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
        }
    },
    detentie: true,
    detentieJudete: ['Braila', 'Galati', 'Tulcea', 'Constanta', 'Ialomita', 'Calarasi', 'Prahova', 'Buzau', 'Vrancea', 'Bacau', 'Neamt', 'Suceava', 'Botosani', 'Iasi', 'Vaslui', 'Giurgiu', 'Teleorman', 'Ilfov', 'Bucuresti']
});

// ---------- Spitale-penitenciar (doar pentru completitudine) ----------
const spitale = [
    'Penitenciarul-Spital Bucuresti-Jilava',
    'Penitenciarul-Spital Bucuresti-Rahova',
    'Penitenciarul-Spital Targu-Ocna',
    'Penitenciarul-Spital Mioveni',
    'Penitenciarul-Spital Constanta-Poarta Alba',
    'Penitenciarul-Spital Dej'
];
spitale.forEach(n => {
    UNITATI.push({
        id: 'spital-' + n.replace(/\s/g, '-').toLowerCase(),
        nume: n,
        judeteDeservite: [],
        categorii: { masculin: { minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] } }, feminin: { minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] } } },
        spital: true
    });
});

// ============================================================
// LISTA JUDETELOR
// ============================================================
const JUDETE = [
    'Alba', 'Hunedoara', 'Sibiu', 'Bacau', 'Neamt', 'Brasov', 'Covasna',
    'Bucuresti', 'Calarasi', 'Ialomita', 'Giurgiu', 'Ilfov', 'Teleorman',
    'Bistrita-Nasaud', 'Cluj', 'Maramures', 'Salaj', 'Constanta', 'Tulcea',
    'Dolj', 'Gorj', 'Mehedinti', 'Olt', 'Braila', 'Galati', 'Vrancea',
    'Iasi', 'Vaslui', 'Bihor', 'Satu Mare', 'Arges', 'Valcea', 'Buzau',
    'Prahova', 'Dambovita', 'Botosani', 'Suceava', 'Harghita', 'Mures',
    'Arad', 'Caras-Severin', 'Timis'
].sort();

// ============================================================
// FUNCTIA PRINCIPALA DE CAUTARE
// ============================================================
function gasesteUnitati(sex, varsta, regim, judet, mode) {
    // mode: 'judiciar' sau 'executare'
    const regimMap = {
        'arestat': 'arestat',
        'deschis': 'deschis',
        'semideschis': 'semideschis',
        'inchis': 'inchis',
        'maxima': 'maxima',
        'educativ': 'educativ'
    };
    const regimKey = regimMap[regim] || regim;
    const matches = [];

    // Caz educativ / detentie
    if (regimKey === 'educativ') {
        UNITATI.forEach(u => {
            if (u.educativ) {
                if (u.educativJudete && u.educativJudete.includes(judet)) {
                    matches.push({ unitate: u, regimJudete: u.educativJudete, judeteDeservite: u.judeteDeservite || [] });
                }
            }
            if (u.detentie) {
                if (u.detentieJudete && u.detentieJudete.includes(judet)) {
                    matches.push({ unitate: u, regimJudete: u.detentieJudete, judeteDeservite: u.judeteDeservite || [] });
                }
            }
        });
        return matches;
    }

    // Cautare normala
    UNITATI.forEach(u => {
        if (u.educativ || u.detentie || u.spital) return;

        // === REGULA SPECIALA: Dolj + mod judiciar ===
        if (mode === 'judiciar' && judet === 'Dolj') {
            // Excludem Pelendava
            if (u.id === 'pelendava') return;
            // Adaugam Craiova daca nu este deja in matches (va fi adaugat mai jos)
            // Dar lasam si celelalte unitati care corespund criteriilor.
        }

        const catSex = u.categorii[sex];
        if (!catSex) return;

        const catVarsta = catSex[varsta];
        if (!catVarsta) return;

        const judeteRegim = catVarsta[regimKey];
        if (!judeteRegim || !Array.isArray(judeteRegim)) return;

        if (judeteRegim.includes(judet) || judeteRegim.includes('toate')) {
            matches.push({
                unitate: u,
                regimJudete: judeteRegim,
                judeteDeservite: u.judeteDeservite || []
            });
        }
    });

    // === Dupa cautarea normala, pentru Dolj + mod judiciar, asiguram prezenta Craiova ===
    if (mode === 'judiciar' && judet === 'Dolj') {
        // Verificam daca Craiova exista deja in matches
        const craiovaExists = matches.some(m => m.unitate.id === 'craiova');
        if (!craiovaExists) {
            const craiovaUnit = UNITATI.find(u => u.id === 'craiova');
            if (craiovaUnit) {
                matches.push({
                    unitate: craiovaUnit,
                    regimJudete: ['Dolj'],
                    judeteDeservite: ['Dolj', 'Olt', 'Mehedinti', 'Gorj']
                });
            }
        }
        // Eliminam Pelendava (desi ar trebui deja exclus)
        const filtered = matches.filter(m => m.unitate.id !== 'pelendava');
        return filtered;
    }

    return matches;
}
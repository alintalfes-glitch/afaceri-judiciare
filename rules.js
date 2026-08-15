// ============================================================
// REGULI DE TRANSFER – DECIZIA 360/2020
// rules.js – conține datele complete din Anexa 1, 3, 5
// ============================================================

const UNITATI = [];

// ---------- 1. Penitenciarul Aiud ----------
UNITATI.push({
    id: 'aiud',
    nume: 'Penitenciarul Aiud',
    judeteDeservite: ['Alba', 'Sibiu', 'Hunedoara'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                deschis: [],
                semideschis: [],
                inchis: ['Bistrița-Năsăud', 'Maramureș', 'Sălaj', 'Satu Mare', 'Bihor', 'Cluj', 'Alba', 'Sibiu', 'Hunedoara', 'Mureș'],
                maxima: ['Bistrița-Năsăud', 'Maramureș', 'Sălaj', 'Satu Mare', 'Bihor', 'Cluj', 'Alba', 'Sibiu', 'Hunedoara', 'Mureș'],
                masura_educativa_penitenciar: []
            },
            major: {
                deschis: ['Alba', 'Sibiu', 'Mureș', 'Brașov', 'Covasna', 'Harghita'],
                semideschis: [],
                inchis: ['Alba', 'Sibiu', 'Mureș', 'Brașov', 'Covasna'],
                maxima: ['Alba', 'Sibiu', 'Mureș', 'Brașov', 'Covasna', 'Harghita'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Alba', 'Sibiu'] },
            tanar: { judete: ['Alba', 'Sibiu'] },
            major: { judete: ['Alba', 'Sibiu'] }
        },
        feminin: {
            minor: { judete: ['Alba', 'Sibiu', 'Hunedoara'] },
            tanar: { judete: ['Alba', 'Sibiu', 'Hunedoara'] },
            major: { judete: ['Alba', 'Sibiu', 'Hunedoara'] }
        },
        risc: {
            masculin: { judete: ['Hunedoara'] },
            feminin: { judete: ['Hunedoara'] }
        }
    }
});

// ---------- 2. Penitenciarul Arad ----------
UNITATI.push({
    id: 'arad',
    nume: 'Penitenciarul Arad',
    judeteDeservite: ['Arad', 'Timiș', 'Caraș-Severin'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: [],
                semideschis: [],
                inchis: ['Arad', 'Timiș', 'Hunedoara', 'Alba', 'Caraș-Severin', 'Gorj', 'Mehedinți'],
                maxima: ['Arad', 'Timiș', 'Hunedoara', 'Alba', 'Caraș-Severin', 'Gorj', 'Mehedinți'],
                masura_educativa_penitenciar: ['toate']
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                deschis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                semideschis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                deschis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                semideschis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Arad', 'Timiș', 'Caraș-Severin'] },
            tanar: { judete: ['Arad', 'Timiș', 'Caraș-Severin'] },
            major: { judete: ['Arad', 'Timiș', 'Caraș-Severin'], excludeRegim: ['semideschis', 'deschis'] }
        },
        feminin: {
            minor: { judete: ['Arad', 'Timiș', 'Caraș-Severin'] },
            tanar: { judete: ['Arad', 'Timiș', 'Caraș-Severin'] },
            major: { judete: ['Arad', 'Timiș', 'Caraș-Severin'] }
        }
    }
});

// ---------- 3. Penitenciarul Bacău ----------
UNITATI.push({
    id: 'bacau',
    nume: 'Penitenciarul Bacău',
    judeteDeservite: ['Bacău', 'Neamț', 'Vaslui'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['toate_munca'],
                semideschis: [],
                inchis: ['Botoșani', 'Suceava', 'Iași', 'Neamț', 'Vaslui', 'Bacău', 'Galați', 'Vrancea', 'Brăila'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Bacău', 'Neamț'] },
            tanar: { judete: ['Bacău', 'Neamț'] },
            major: { judete: ['Bacău', 'Neamț'] }
        },
        feminin: {
            minor: { judete: ['Vaslui', 'Bacău', 'Neamț'] },
            tanar: { judete: ['Vaslui', 'Bacău', 'Neamț'] },
            major: { judete: ['Vaslui', 'Bacău', 'Neamț'] }
        }
    }
});

// ---------- 4. Penitenciarul Baia Mare ----------
UNITATI.push({
    id: 'baia-mare',
    nume: 'Penitenciarul Baia Mare',
    judeteDeservite: ['Maramureș'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Maramureș', 'Cluj'],
                semideschis: ['Maramureș', 'Cluj'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Maramureș'] },
            tanar: { judete: ['Maramureș'] },
            major: { judete: ['Maramureș'] }
        }
    }
});

// ---------- 5. Penitenciarul Bistrița ----------
UNITATI.push({
    id: 'bistrita',
    nume: 'Penitenciarul Bistrița',
    judeteDeservite: ['Bistrița-Năsăud'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Bistrița-Năsăud', 'Cluj'],
                semideschis: ['Bistrița-Năsăud', 'Cluj'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Bistrița-Năsăud'] },
            tanar: { judete: ['Bistrița-Năsăud'] },
            major: { judete: ['Bistrița-Năsăud'] }
        }
    }
});

// ---------- 6. Penitenciarul Botoșani ----------
UNITATI.push({
    id: 'botosani',
    nume: 'Penitenciarul Botoșani',
    judeteDeservite: ['Botoșani', 'Suceava'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Botoșani', 'Suceava', 'Iași'],
                semideschis: ['Botoșani', 'Suceava', 'Iași'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Botoșani', 'Suceava'] },
            tanar: { judete: ['Botoșani', 'Suceava'] },
            major: { judete: ['Botoșani', 'Suceava'] }
        },
        feminin: {
            minor: { judete: ['Botoșani', 'Suceava'] },
            tanar: { judete: ['Botoșani', 'Suceava'] },
            major: { judete: ['Botoșani', 'Suceava'] }
        }
    }
});

// ---------- 7. Penitenciarul Brăila ----------
UNITATI.push({
    id: 'braila',
    nume: 'Penitenciarul Brăila',
    judeteDeservite: ['Brăila', 'Galați'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Brăila', 'Galați'],
                semideschis: ['Brăila', 'Galați', 'Buzău'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            major: { judete: ['Brăila', 'Galați'], doarRegim: ['deschis', 'semideschis'] }
        }
    }
});

// ---------- 8. Penitenciarul București-Jilava ----------
UNITATI.push({
    id: 'jilava',
    nume: 'Penitenciarul București-Jilava',
    judeteDeservite: ['Ilfov', 'București'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                semideschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            major: { judete: ['Ilfov', 'București'], doarRegim: ['semideschis', 'deschis'] }
        }
    }
});

// ---------- 9. Penitenciarul București-Rahova ----------
UNITATI.push({
    id: 'rahova',
    nume: 'Penitenciarul București-Rahova',
    judeteDeservite: ['Ilfov', 'București'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                semideschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                inchis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Ilfov', 'București'] },
            tanar: { judete: ['Ilfov', 'București'] },
            major: { judete: ['Ilfov', 'București'], excludeRegim: ['semideschis', 'deschis'] }
        }
    }
});

// ---------- 10. Penitenciarul Codlea ----------
UNITATI.push({
    id: 'codlea',
    nume: 'Penitenciarul Codlea',
    judeteDeservite: ['Brașov', 'Covasna'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Brașov', 'Covasna', 'Harghita'],
                semideschis: ['Brașov', 'Covasna', 'Harghita'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Brașov', 'Covasna'] },
            tanar: { judete: ['Brașov', 'Covasna'] },
            major: { judete: ['Brașov', 'Covasna'] }
        }
    }
});

// ---------- 11. Penitenciarul Constanța-Poarta Albă ----------
UNITATI.push({
    id: 'constanta',
    nume: 'Penitenciarul Constanța-Poarta Albă',
    judeteDeservite: ['Constanța'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Constanța', 'Călărași'],
                semideschis: ['Constanța', 'Călărași'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Constanța', 'Tulcea'] },
            tanar: { judete: ['Constanța', 'Tulcea'] },
            major: { judete: ['Constanța', 'Tulcea'] }
        },
        feminin: {
            minor: { judete: ['Constanța', 'Tulcea'] },
            tanar: { judete: ['Constanța', 'Tulcea'] },
            major: { judete: ['Constanța', 'Tulcea'] }
        }
    }
});

// ---------- 12. Penitenciarul Craiova ----------
UNITATI.push({
    id: 'craiova',
    nume: 'Penitenciarul Craiova',
    judeteDeservite: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                deschis: [],
                semideschis: [],
                inchis: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea', 'Arad', 'Timiș', 'Caraș-Severin'],
                maxima: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea', 'Arad', 'Timiș', 'Caraș-Severin'],
                masura_educativa_penitenciar: []
            },
            major: {
                deschis: ['toate_munca'],
                semideschis: [],
                inchis: ['Dolj', 'Olt', 'Argeș', 'Vâlcea'],
                maxima: ['Dolj', 'Olt', 'Argeș', 'Vâlcea'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea'],
                semideschis: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Dolj', 'Olt'] },
            tanar: { judete: ['Dolj', 'Olt'] },
            major: { judete: ['Dolj', 'Olt'] }
        },
        feminin: {
            minor: { judete: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'] },
            tanar: { judete: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'] },
            major: { judete: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'] }
        }
    }
});

// ---------- 13. Penitenciarul Craiova-Pelendava ----------
UNITATI.push({
    id: 'pelendava',
    nume: 'Penitenciarul Craiova-Pelendava',
    judeteDeservite: [],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinți'],
                semideschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinți'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {}
});

// ---------- 14. Penitenciarul Deva ----------
UNITATI.push({
    id: 'deva',
    nume: 'Penitenciarul Deva',
    judeteDeservite: ['Hunedoara'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Alba', 'Hunedoara', 'Sibiu'],
                semideschis: ['Alba', 'Hunedoara', 'Sibiu'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Hunedoara'] },
            tanar: { judete: ['Hunedoara'] },
            major: { judete: ['Hunedoara'] }
        }
    }
});

// ---------- 15. Penitenciarul Drobeta-Turnu Severin ----------
UNITATI.push({
    id: 'drobeta',
    nume: 'Penitenciarul Drobeta-Turnu Severin',
    judeteDeservite: ['Mehedinți'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Mehedinți', 'Dolj', 'Olt', 'Gorj'],
                semideschis: ['Mehedinți', 'Dolj', 'Olt', 'Gorj'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Mehedinți'] },
            tanar: { judete: ['Mehedinți'] },
            major: { judete: ['Mehedinți'] }
        }
    }
});

// ---------- 16. Penitenciarul Focșani ----------
UNITATI.push({
    id: 'focsani',
    nume: 'Penitenciarul Focșani',
    judeteDeservite: ['Buzău', 'Vrancea'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Botoșani', 'Suceava', 'Iași', 'Neamț', 'Vaslui', 'Bacău', 'Galați', 'Vrancea', 'Brăila'],
                semideschis: [],
                inchis: ['Botoșani', 'Suceava', 'Iași', 'Neamț', 'Vaslui', 'Bacău', 'Galați', 'Vrancea', 'Brăila'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Vrancea', 'Buzău'] },
            tanar: { judete: ['Vrancea', 'Buzău'] },
            major: { judete: ['Vrancea', 'Buzău'] }
        },
        feminin: {
            minor: { judete: ['Vrancea', 'Buzău'] },
            tanar: { judete: ['Vrancea', 'Buzău'] },
            major: { judete: ['Vrancea', 'Buzău'] }
        }
    }
});

// ---------- 17. Penitenciarul Găești ----------
UNITATI.push({
    id: 'gaesti',
    nume: 'Penitenciarul Găești',
    judeteDeservite: ['Dâmbovița'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Prahova', 'Dâmbovița', 'Argeș'],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {}
});

// ---------- 18. Penitenciarul Galați ----------
UNITATI.push({
    id: 'galati',
    nume: 'Penitenciarul Galați',
    judeteDeservite: ['Galați', 'Brăila'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['toate_munca'],
                semideschis: [],
                inchis: ['Galați', 'Brăila', 'Bacău', 'Vaslui'],
                maxima: ['Galați', 'Brăila', 'Bacău', 'Vaslui'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Galați', 'Brăila'] },
            tanar: { judete: ['Galați', 'Brăila'] },
            major: { judete: ['Galați', 'Brăila'], excludeRegim: ['semideschis', 'deschis', 'educativ'] }
        },
        feminin: {
            minor: { judete: ['Galați', 'Brăila'] },
            tanar: { judete: ['Galați', 'Brăila'] },
            major: { judete: ['Galați', 'Brăila'] }
        }
    }
});

// ---------- 19. Penitenciarul Gherla ----------
UNITATI.push({
    id: 'gherla',
    nume: 'Penitenciarul Gherla',
    judeteDeservite: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                deschis: [],
                semideschis: [],
                inchis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Mureș', 'Harghita'],
                maxima: ['Cluj', 'Bistrița-Năsăud', 'Mureș', 'Maramureș'],
                masura_educativa_penitenciar: []
            },
            major: {
                deschis: ['toate_munca'],
                semideschis: [],
                inchis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Mureș', 'Harghita'],
                maxima: ['Cluj', 'Bistrița-Năsăud', 'Mureș', 'Maramureș'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                deschis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș', 'Botoșani', 'Suceava', 'Iași', 'Neamț'],
                semideschis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș', 'Botoșani', 'Suceava', 'Iași', 'Neamț'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                deschis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș', 'Botoșani', 'Suceava', 'Iași', 'Neamț'],
                semideschis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș', 'Botoșani', 'Suceava', 'Iași', 'Neamț'],
                inchis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                maxima: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                masura_educativa_penitenciar: []
            }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'] },
            tanar: { judete: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'] },
            major: { judete: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'] }
        },
        feminin: {
            minor: { judete: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'] },
            tanar: { judete: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'] },
            major: { judete: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'] }
        }
    }
});

// ---------- 20. Penitenciarul Giurgiu ----------
UNITATI.push({
    id: 'giurgiu',
    nume: 'Penitenciarul Giurgiu',
    judeteDeservite: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
                semideschis: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
                inchis: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
                maxima: ['Giurgiu', 'Teleorman', 'Ilfov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'București'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'] },
            tanar: { judete: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'] },
            major: { judete: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'] }
        }
    }
});

// ---------- 21. Penitenciarul Iași ----------
UNITATI.push({
    id: 'iasi',
    nume: 'Penitenciarul Iași',
    judeteDeservite: ['Iași', 'Bacău', 'Vaslui', 'Neamț'],
    custodie: {
        masculin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                deschis: ['Iași', 'Botoșani', 'Suceava', 'Bacău', 'Neamț', 'Vaslui'],
                semideschis: [],
                inchis: ['Iași', 'Suceava', 'Botoșani', 'Neamț', 'Bacău', 'Vaslui'],
                maxima: ['Iași', 'Suceava', 'Botoșani', 'Neamț'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Iași'] },
            tanar: { judete: ['Iași'] },
            major: { judete: ['Iași'] }
        },
        feminin: {
            minor: { judete: ['Iași'] },
            tanar: { judete: ['Iași'] },
            major: { judete: ['Iași'] }
        },
        risc: {
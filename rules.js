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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: {
                arestat: ['Alba', 'Sibiu', 'Hunedoara'],
                deschis: [],
                semideschis: [],
                inchis: ['Bistrița-Năsăud', 'Maramureș', 'Sălaj', 'Satu Mare', 'Bihor', 'Cluj', 'Alba', 'Sibiu', 'Hunedoara', 'Mureș'],
                maxima: ['Bistrița-Năsăud', 'Maramureș', 'Sălaj', 'Satu Mare', 'Bihor', 'Cluj', 'Alba', 'Sibiu', 'Hunedoara', 'Mureș']
            },
            major: {
                arestat: ['Alba', 'Sibiu', 'Hunedoara'],
                deschis: ['Alba', 'Sibiu', 'Mureș', 'Brașov', 'Covasna', 'Harghita'],
                semideschis: [],
                inchis: ['Alba', 'Sibiu', 'Mureș', 'Brașov', 'Covasna'],
                maxima: ['Alba', 'Sibiu', 'Mureș', 'Brașov', 'Covasna', 'Harghita']
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }
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

// ---------- 2. Penitenciarul Arad (include Anexa 5 - măsuri educative majori bărbați) ----------
UNITATI.push({
    id: 'arad',
    nume: 'Penitenciarul Arad',
    judeteDeservite: ['Arad', 'Timiș', 'Caraș-Severin'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Arad'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Arad'],
                deschis: [],
                semideschis: [],
                inchis: ['Arad', 'Timiș', 'Hunedoara', 'Alba', 'Caraș-Severin', 'Gorj', 'Mehedinți'],
                maxima: ['Arad', 'Timiș', 'Hunedoara', 'Alba', 'Caraș-Severin', 'Gorj', 'Mehedinți'],
                masura_educativa_penitenciar: ['toate']  // Anexa 5: masculin majori din toate județele
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                deschis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                semideschis: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Arad', 'Sălaj', 'Satu Mare', 'Bihor', 'Timiș', 'Caraș-Severin'],
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
    judeteDeservite: ['Bacău', 'Neamț', 'Vaslui'], // corectat: adăugat Vaslui
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Bacău', 'Neamț'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Bacău', 'Neamț'],
                deschis: ['toate'], // folosire la muncă → toate județele
                semideschis: [],
                inchis: ['Botoșani', 'Suceava', 'Iași', 'Neamț', 'Vaslui', 'Bacău', 'Galați', 'Vrancea', 'Brăila'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Botoșani', 'Suceava', 'Iași', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila', 'Bacău', 'Neamț'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Botoșani', 'Suceava', 'Iași', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila', 'Bacău', 'Neamț'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Maramureș', 'Cluj'],
                semideschis: ['Maramureș', 'Cluj'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Bistrița-Năsăud', 'Cluj'],
                semideschis: ['Bistrița-Năsăud', 'Cluj'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Botoșani', 'Suceava'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Botoșani', 'Suceava'],
                deschis: ['Botoșani', 'Suceava', 'Iași'],
                semideschis: ['Botoșani', 'Suceava', 'Iași'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Brăila', 'Galați'],
                semideschis: ['Brăila', 'Galați', 'Buzău'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                semideschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Ilfov', 'București'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Ilfov', 'București'],
                deschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                semideschis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                inchis: ['București', 'Ilfov', 'Giurgiu', 'Teleorman'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Brașov', 'Covasna'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Brașov', 'Covasna'],
                deschis: ['Brașov', 'Covasna', 'Harghita'],
                semideschis: ['Brașov', 'Covasna', 'Harghita'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Constanța', 'Tulcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Constanța'],
                deschis: ['Constanța', 'Călărași'],
                semideschis: ['Constanța', 'Călărași'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Constanța', 'Călărași', 'Ialomița', 'Tulcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Constanța', 'Călărași', 'Ialomița', 'Tulcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
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
// Corectat: feminin tânăr are doar arestat preventiv (deschis/semideschis doar la major)
UNITATI.push({
    id: 'craiova',
    nume: 'Penitenciarul Craiova',
    judeteDeservite: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Dolj', 'Olt', 'Gorj'],
                deschis: [],
                semideschis: [],
                inchis: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea', 'Arad', 'Timiș', 'Caraș-Severin'],
                maxima: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea', 'Arad', 'Timiș', 'Caraș-Severin'],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Dolj', 'Olt', 'Gorj'],
                deschis: ['toate'], // folosire la muncă
                semideschis: [],
                inchis: ['Dolj', 'Olt', 'Argeș', 'Vâlcea'],
                maxima: ['Dolj', 'Olt', 'Argeș', 'Vâlcea'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'],
                deschis: [],  // NU există pentru tinere
                semideschis: [], // NU există pentru tinere
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Dolj', 'Olt', 'Mehedinți', 'Gorj'],
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinți'],
                semideschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinți'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Alba', 'Hunedoara', 'Sibiu'],
                semideschis: ['Alba', 'Hunedoara', 'Sibiu'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Mehedinți'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Mehedinți'],
                deschis: ['Mehedinți', 'Dolj', 'Olt', 'Gorj'],
                semideschis: ['Mehedinți', 'Dolj', 'Olt', 'Gorj'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Vrancea', 'Buzău'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Vrancea', 'Buzău'],
                deschis: ['Botoșani', 'Suceava', 'Iași', 'Neamț', 'Vaslui', 'Bacău', 'Galați', 'Vrancea', 'Brăila'],
                semideschis: [],
                inchis: ['Botoșani', 'Suceava', 'Iași', 'Neamț', 'Vaslui', 'Bacău', 'Galați', 'Vrancea', 'Brăila'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Prahova', 'Dâmbovița', 'Argeș'],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Brăila', 'Galați'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Galați', 'Brăila'],
                deschis: ['toate'], // folosire la muncă
                semideschis: [],
                inchis: ['Galați', 'Brăila', 'Bacău', 'Vaslui'],
                maxima: ['Galați', 'Brăila', 'Bacău', 'Vaslui'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Galați', 'Brăila'] },
            tanar: { judete: ['Galați', 'Brăila'] },
            major: { judete: ['Galați', 'Brăila'], excludeRegim: ['semideschis', 'deschis'] }
        },
        feminin: {
            minor: { judete: ['Galați', 'Brăila'] },
            tanar: { judete: ['Galați', 'Brăila'] },
            major: { judete: ['Galați', 'Brăila'] }
        }
    }
});

// ---------- 19. Penitenciarul Gherla ----------
// Corectat: feminin tânăr nu mai are regim închis/maximă – doar major
UNITATI.push({
    id: 'gherla',
    nume: 'Penitenciarul Gherla',
    judeteDeservite: ['Cluj', 'Maramureș', 'Bistrița-Năsăud'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Cluj', 'Bistrița-Năsăud', 'Maramureș'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Cluj', 'Bistrița-Năsăud', 'Maramureș'],
                deschis: ['toate'], // folosire la muncă
                semideschis: [],
                inchis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Mureș', 'Harghita'],
                maxima: ['Cluj', 'Bistrița-Năsăud', 'Mureș', 'Maramureș'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș'],
                deschis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș', 'Botoșani', 'Suceava', 'Iași', 'Neamț'],
                semideschis: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș', 'Botoșani', 'Suceava', 'Iași', 'Neamț'],
                inchis: [], // NU există pentru tinere
                maxima: [], // NU există pentru tinere
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Cluj', 'Bistrița-Năsăud', 'Maramureș', 'Alba', 'Sibiu', 'Hunedoara', 'Harghita', 'Mureș'],
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Giurgiu', 'Teleorman'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Giurgiu', 'Teleorman'],
                deschis: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
                semideschis: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
                inchis: ['Giurgiu', 'Teleorman', 'Ilfov', 'București'],
                maxima: ['Giurgiu', 'Teleorman', 'Ilfov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'București'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Iași'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Iași'],
                deschis: ['Iași', 'Botoșani', 'Suceava', 'Bacău', 'Neamț', 'Vaslui'],
                semideschis: [],
                inchis: ['Iași', 'Suceava', 'Botoșani', 'Neamț', 'Bacău', 'Vaslui'],
                maxima: ['Iași', 'Suceava', 'Botoșani', 'Neamț'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
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
            masculin: { judete: ['Bacău', 'Neamț', 'Vaslui'] },
            feminin: { judete: ['Bacău', 'Neamț', 'Vaslui'] }
        }
    }
});

// ---------- 22. Penitenciarul Mărgineni ----------
UNITATI.push({
    id: 'margineni',
    nume: 'Penitenciarul Mărgineni',
    judeteDeservite: ['Dâmbovița', 'Prahova'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Dâmbovița', 'Prahova'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Dâmbovița', 'Prahova'],
                deschis: ['Dâmbovița', 'Prahova', 'Buzău', 'Vrancea'],
                semideschis: [],
                inchis: ['Dâmbovița', 'Prahova', 'Buzău', 'Vrancea'],
                maxima: ['Dâmbovița', 'Prahova', 'Buzău', 'Vrancea'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Dâmbovița', 'Prahova'] },
            tanar: { judete: ['Dâmbovița', 'Prahova'] },
            major: { judete: ['Dâmbovița', 'Prahova'], excludeRegim: ['semideschis'] }
        }
    }
});

// ---------- 23. Penitenciarul Miercurea-Ciuc ----------
// Corectat: tineri masculin au toate regimurile cu 'toate' județele
// Anexa 5: tineri masculin pentru măsuri educative în penitenciar
UNITATI.push({
    id: 'miercurea',
    nume: 'Penitenciarul Miercurea-Ciuc',
    judeteDeservite: ['Harghita'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Harghita'],
                deschis: ['toate'],
                semideschis: ['toate'],
                inchis: ['toate'],
                maxima: ['toate'],
                masura_educativa_penitenciar: ['toate'] // Anexa 5
            },
            major: {
                arestat: ['Harghita'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Harghita'] },
            tanar: { judete: ['Harghita'] },
            major: { judete: ['Harghita'] }
        },
        feminin: {
            minor: { judete: ['Harghita'] },
            tanar: { judete: ['Harghita'] },
            major: { judete: ['Harghita'] }
        }
    }
});

// ---------- 24. Penitenciarul Mioveni ----------
UNITATI.push({
    id: 'mioveni',
    nume: 'Penitenciarul Mioveni',
    judeteDeservite: ['Argeș', 'Vâlcea'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Argeș', 'Vâlcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Argeș', 'Vâlcea'],
                deschis: ['toate'], // folosire la muncă
                semideschis: ['Argeș', 'Vâlcea', 'Dâmbovița'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Argeș', 'Vâlcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Argeș', 'Vâlcea'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Argeș', 'Vâlcea'] },
            tanar: { judete: ['Argeș', 'Vâlcea'] },
            major: { judete: ['Argeș', 'Vâlcea'] }
        },
        feminin: {
            minor: { judete: ['Argeș', 'Vâlcea'] },
            tanar: { judete: ['Argeș', 'Vâlcea'] },
            major: { judete: ['Argeș', 'Vâlcea'] }
        }
    }
});

// ---------- 25. Penitenciarul Oradea ----------
// Eliminat complet custodie feminin (nu există în sursă)
UNITATI.push({
    id: 'oradea',
    nume: 'Penitenciarul Oradea',
    judeteDeservite: ['Bihor', 'Sălaj', 'Satu Mare'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Bihor', 'Sălaj', 'Satu Mare'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Bihor', 'Sălaj', 'Satu Mare'],
                deschis: ['Bihor', 'Sălaj', 'Cluj', 'Satu Mare'],
                semideschis: [],
                inchis: ['Bihor', 'Sălaj', 'Cluj', 'Satu Mare'],
                maxima: ['Bihor', 'Sălaj', 'Cluj', 'Satu Mare'],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Bihor', 'Sălaj'] },
            tanar: { judete: ['Bihor', 'Sălaj'] },
            major: { judete: ['Bihor', 'Sălaj'] }
        },
        feminin: {
            minor: { judete: ['Bihor', 'Sălaj', 'Satu Mare'] },
            tanar: { judete: ['Bihor', 'Sălaj', 'Satu Mare'] },
            major: { judete: ['Bihor', 'Sălaj', 'Satu Mare'] }
        }
    }
});

// ---------- 26. Penitenciarul Ploiești ----------
UNITATI.push({
    id: 'ploiesti',
    nume: 'Penitenciarul Ploiești',
    judeteDeservite: ['Prahova', 'Dâmbovița'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Prahova', 'Dâmbovița', 'Buzău'],
                semideschis: ['Prahova', 'Dâmbovița', 'Buzău', 'Vrancea'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            major: { judete: ['Prahova', 'Dâmbovița'], doarRegim: ['deschis', 'semideschis'] }
        }
    }
});

// ---------- 27. Penitenciarul Ploiești-Târgșorul Nou ----------
// Corectat: mapare corectă vârste + Anexa 5 (feminin tinere/majore)
UNITATI.push({
    id: 'targsor',
    nume: 'Penitenciarul Ploiești-Târgșorul Nou',
    judeteDeservite: ['Prahova', 'Dâmbovița', 'București', 'Ilfov', 'Brașov', 'Covasna'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['toate'], // folosiți la muncă
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: {
                arestat: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Covasna', 'București'],
                deschis: ['Dolj', 'Olt', 'Gorj', 'Mehedinți', 'Argeș', 'Vâlcea', 'Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'Covasna', 'București', 'Bacău', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila'],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: [] // nu există minore în Anexa 5
            },
            tanar: {
                arestat: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Covasna', 'București'],
                deschis: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'Covasna', 'București', 'Bacău', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila'],
                semideschis: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'Covasna', 'București', 'Bacău', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila'],
                inchis: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea'],
                maxima: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea'],
                masura_educativa_penitenciar: ['toate'] // Anexa 5: tinere din toate județele
            },
            major: {
                arestat: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Covasna', 'București'],
                deschis: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'Covasna', 'București', 'Bacău', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila'],
                semideschis: ['Prahova', 'Dâmbovița', 'Ilfov', 'Giurgiu', 'Teleorman', 'Brașov', 'Constanța', 'Călărași', 'Ialomița', 'Tulcea', 'Covasna', 'București', 'Bacău', 'Vaslui', 'Vrancea', 'Buzău', 'Galați', 'Brăila'],
                inchis: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea'],
                maxima: ['Dolj', 'Olt', 'Mehedinți', 'Gorj', 'Argeș', 'Vâlcea'],
                masura_educativa_penitenciar: ['toate'] // Anexa 5: majore din toate județele
            }
        }
    },
    transferJudiciar: {
        feminin: {
            minor: { judete: ['Prahova', 'Dâmbovița', 'București', 'Ilfov', 'Brașov', 'Covasna'] },
            tanar: { judete: ['Prahova', 'Dâmbovița', 'București', 'Ilfov', 'Brașov', 'Covasna'] },
            major: { judete: ['Prahova', 'Dâmbovița', 'București', 'Ilfov', 'Brașov', 'Covasna'] }
        }
    }
});

// ---------- 28. Penitenciarul Satu Mare ----------
UNITATI.push({
    id: 'satu-mare',
    nume: 'Penitenciarul Satu Mare',
    judeteDeservite: ['Satu Mare'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Satu Mare', 'Sălaj', 'Bihor'],
                semideschis: ['Satu Mare', 'Sălaj', 'Bihor'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Satu Mare'] },
            tanar: { judete: ['Satu Mare'] },
            major: { judete: ['Satu Mare'] }
        }
    }
});

// ---------- 29. Penitenciarul Slobozia ----------
UNITATI.push({
    id: 'slobozia',
    nume: 'Penitenciarul Slobozia',
    judeteDeservite: ['Ialomița', 'Călărași'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Ialomița', 'Călărași'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Ialomița', 'Călărași'],
                deschis: ['Călărași', 'Ialomița', 'Constanța', 'Tulcea'],
                semideschis: [],
                inchis: ['Călărași', 'Ialomița', 'Constanța', 'Tulcea', 'Buzău'],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Ialomița', 'Călărași'] },
            tanar: { judete: ['Ialomița', 'Călărași'] },
            major: { judete: ['Ialomița', 'Călărași'] }
        },
        feminin: {
            minor: { judete: ['Ialomița', 'Călărași'] },
            tanar: { judete: ['Ialomița', 'Călărași'] },
            major: { judete: ['Ialomița', 'Călărași'] }
        }
    }
});

// ---------- 30. S.N.P.A.P. Târgu Ocna ----------
UNITATI.push({
    id: 'snap-tg-ocna',
    nume: 'S.N.P.A.P. Târgu Ocna',
    judeteDeservite: [],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['toate'], // folosire la muncă
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {}
});

// ---------- 31. Penitenciarul Târgu Jiu ----------
UNITATI.push({
    id: 'targu-jiu',
    nume: 'Penitenciarul Târgu Jiu',
    judeteDeservite: ['Gorj'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: [],
                deschis: ['Gorj', 'Dolj', 'Olt', 'Mehedinți', 'Vâlcea', 'Argeș'],
                semideschis: ['Gorj', 'Dolj', 'Mehedinți', 'Olt', 'Vâlcea'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Gorj'] },
            tanar: { judete: ['Gorj'] },
            major: { judete: ['Gorj'] }
        }
    }
});

// ---------- 32. Penitenciarul Târgu Mureș ----------
UNITATI.push({
    id: 'targu-mures',
    nume: 'Penitenciarul Târgu Mureș',
    judeteDeservite: ['Mureș'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Mureș'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Mureș'],
                deschis: ['Mureș', 'Harghita'],
                semideschis: ['Mureș', 'Harghita'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Mureș'] },
            tanar: { judete: ['Mureș'] },
            major: { judete: ['Mureș'] }
        },
        feminin: {
            minor: { judete: ['Mureș'] },
            tanar: { judete: ['Mureș'] },
            major: { judete: ['Mureș'] }
        }
    }
});

// ---------- 33. Penitenciarul Timișoara ----------
UNITATI.push({
    id: 'timisoara',
    nume: 'Penitenciarul Timișoara',
    judeteDeservite: ['Timiș', 'Caraș-Severin'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Timiș', 'Caraș-Severin'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Timiș', 'Caraș-Severin'],
                deschis: ['Arad', 'Timiș', 'Caraș-Severin'],
                semideschis: ['Arad', 'Timiș', 'Caraș-Severin'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Timiș', 'Caraș-Severin'], doarRegim: ['arestat'] },
            tanar: { judete: ['Timiș', 'Caraș-Severin'], doarRegim: ['arestat'] },
            major: { judete: ['Timiș', 'Caraș-Severin'], doarRegim: ['arestat', 'deschis', 'semideschis'] }
        },
        feminin: {
            minor: { judete: ['Timiș', 'Caraș-Severin'], doarRegim: ['arestat'] },
            tanar: { judete: ['Timiș', 'Caraș-Severin'], doarRegim: ['arestat'] },
            major: { judete: ['Timiș', 'Caraș-Severin'], doarRegim: ['arestat'] }
        }
    }
});

// ---------- 34. Penitenciarul Tulcea ----------
UNITATI.push({
    id: 'tulcea',
    nume: 'Penitenciarul Tulcea',
    judeteDeservite: ['Tulcea'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: {
                arestat: ['Tulcea'],
                deschis: ['Tulcea', 'Brăila', 'Galați', 'Ialomița', 'Constanța'],
                semideschis: ['Tulcea', 'Brăila', 'Galați', 'Ialomița', 'Constanța', 'Vrancea'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Tulcea'] },
            tanar: { judete: ['Tulcea'] },
            major: { judete: ['Tulcea'] }
        },
        feminin: {
            minor: { judete: ['Tulcea'] },
            tanar: { judete: ['Tulcea'] },
            major: { judete: ['Tulcea'] }
        }
    }
});

// ---------- 35. Penitenciarul Vaslui ----------
UNITATI.push({
    id: 'vaslui',
    nume: 'Penitenciarul Vaslui',
    judeteDeservite: ['Vaslui'],
    custodie: {
        masculin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: {
                arestat: ['Vaslui'],
                deschis: [],
                semideschis: [],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            },
            major: {
                arestat: ['Vaslui'],
                deschis: ['Vaslui', 'Bacău', 'Iași'],
                semideschis: ['Vaslui', 'Vrancea', 'Bacău', 'Iași'],
                inchis: [],
                maxima: [],
                masura_educativa_penitenciar: []
            }
        },
        feminin: {
            minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] },
            major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [], masura_educativa_penitenciar: [] }
        }
    },
    transferJudiciar: {
        masculin: {
            minor: { judete: ['Vaslui'] },
            tanar: { judete: ['Vaslui'] },
            major: { judete: ['Vaslui'] }
        }
    }
});

// ---------- 36. Centrul Educativ Buziaș ----------
// Anexa 3: feminin din toate județele pentru măsură educativă internare
UNITATI.push({
    id: 'buzias',
    nume: 'Centrul Educativ Buziaș',
    judeteDeservite: ['Timiș'],
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
    educativJudeteMasculin: ['Satu Mare', 'Maramureș', 'Bistrița-Năsăud', 'Mureș', 'Sibiu', 'Sălaj', 'Alba', 'Arad', 'Timiș', 'Caraș-Severin', 'Hunedoara', 'Cluj', 'Bihor', 'Gorj', 'Dolj', 'Olt', 'Vâlcea', 'Mehedinți', 'Argeș', 'Giurgiu', 'Teleorman', 'București', 'Ilfov'],
    educativJudeteFeminin: ['toate'], // Anexa 3: femei din toate județele
    transferJudiciar: {}
});

// ---------- 37. Centrul Educativ Târgu Ocna ----------
UNITATI.push({
    id: 'tg-ocna',
    nume: 'Centrul Educativ Târgu Ocna',
    judeteDeservite: ['Bacău'],
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
    educativJudeteMasculin: ['Botoșani', 'Suceava', 'Iași', 'Vaslui', 'Bacău', 'Neamț', 'Brașov', 'Covasna', 'Harghita', 'Vrancea', 'Galați', 'Brăila', 'Buzău', 'Prahova', 'Ialomița', 'Călărași', 'Tulcea', 'Constanța', 'Dâmbovița'],
    educativJudeteFeminin: [], // nu are feminine
    transferJudiciar: {}
});

// ---------- 38. Centrul de Detenție Craiova ----------
// Anexa 3: feminin din toate județele pentru măsură educativă internare
UNITATI.push({
    id: 'cd-craiova',
    nume: 'Centrul de Detenție Craiova',
    judeteDeservite: ['Dolj', 'Olt'],
    categorii: {
        masculin: {
            minor: { arestat: ['Dolj', 'Olt', 'Gorj', 'Mehedinți', 'Caraș-Severin', 'Timiș', 'Arad', 'Argeș', 'Vâlcea', 'Dâmbovița', 'Hunedoara', 'Alba', 'Sibiu', 'Bihor', 'Sălaj', 'Satu Mare', 'Maramureș', 'Bistrița-Năsăud', 'Mureș', 'Brașov', 'Harghita', 'Covasna', 'Cluj'], deschis: [], semideschis: [], inchis: [], maxima: [] },
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
    detentieJudeteMasculin: ['Dolj', 'Olt', 'Gorj', 'Mehedinți', 'Caraș-Severin', 'Timiș', 'Arad', 'Argeș', 'Vâlcea', 'Dâmbovița', 'Hunedoara', 'Alba', 'Sibiu', 'Bihor', 'Sălaj', 'Satu Mare', 'Maramureș', 'Bistrița-Năsăud', 'Mureș', 'Brașov', 'Harghita', 'Covasna', 'Cluj'],
    detentieJudeteFeminin: ['toate'],
    transferJudiciar: {}
});

// ---------- 39. Centrul de Detenție Tichilești ----------
UNITATI.push({
    id: 'tichilesti',
    nume: 'Centrul de Detenție Tichilești',
    judeteDeservite: ['Brăila', 'Galați'],
    categorii: {
        masculin: {
            minor: { arestat: ['Brăila', 'Galați', 'Tulcea', 'Constanța', 'Ialomița', 'Călărași', 'Prahova', 'Buzău', 'Vrancea', 'Bacău', 'Neamț', 'Suceava', 'Botoșani', 'Iași', 'Vaslui', 'Giurgiu', 'Teleorman', 'Ilfov', 'București'], deschis: [], semideschis: [], inchis: [], maxima: [] },
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
    detentieJudeteMasculin: ['Brăila', 'Galați', 'Tulcea', 'Constanța', 'Ialomița', 'Călărași', 'Prahova', 'Buzău', 'Vrancea', 'Bacău', 'Neamț', 'Suceava', 'Botoșani', 'Iași', 'Vaslui', 'Giurgiu', 'Teleorman', 'Ilfov', 'București'],
    detentieJudeteFeminin: [],
    transferJudiciar: {}
});

// ---------- Spitale-penitenciar (40-45) ----------
const spitale = [
    'Penitenciarul-Spital București-Jilava',
    'Penitenciarul-Spital București-Rahova',
    'Penitenciarul-Spital Târgu-Ocna',
    'Penitenciarul-Spital Mioveni',
    'Penitenciarul-Spital Constanța-Poarta Albă',
    'Penitenciarul-Spital Dej'
];
spitale.forEach(n => {
    UNITATI.push({
        id: 'spital-' + n.replace(/\s/g, '-').toLowerCase(),
        nume: n,
        judeteDeservite: [],
        categorii: { masculin: { minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] } }, feminin: { minor: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, tanar: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] }, major: { arestat: [], deschis: [], semideschis: [], inchis: [], maxima: [] } } },
        spital: true,
        transferJudiciar: {}
    });
});

// ============================================================
// LISTA JUDEȚELOR GRUPATE PE CURȚI DE APEL
// ============================================================
const JUDETE_GRUPATE = {
    'Alba Iulia': ['Alba', 'Hunedoara', 'Sibiu'],
    'Bacău': ['Bacău', 'Neamț'],
    'Brașov': ['Brașov', 'Covasna'],
    'București': ['București', 'Călărași', 'Ialomița', 'Giurgiu', 'Ilfov', 'Teleorman'],
    'Cluj': ['Bistrița-Năsăud', 'Cluj', 'Maramureș', 'Sălaj'],
    'Constanța': ['Constanța', 'Tulcea'],
    'Craiova': ['Dolj', 'Gorj', 'Mehedinți', 'Olt'],
    'Galați': ['Brăila', 'Galați', 'Vrancea'],
    'Iași': ['Iași', 'Vaslui'],
    'Oradea': ['Bihor', 'Satu Mare'],
    'Pitești': ['Argeș', 'Vâlcea'],
    'Ploiești': ['Buzău', 'Prahova', 'Dâmbovița'],
    'Suceava': ['Botoșani', 'Suceava'],
    'Târgu Mureș': ['Harghita', 'Mureș'],
    'Timișoara': ['Arad', 'Caraș-Severin', 'Timiș']
};

// ============================================================
// FUNCȚIA PRINCIPALĂ DE CĂUTARE
// ============================================================
function gasesteUnitati(sex, varsta, regim, judet, mode, risc = false) {
    const regimKey = regim;

    // --- Caz special: educativ / detenție (centre educative / centre de detenție) ---
    if (regimKey === 'educativ') {
        const matches = [];
        UNITATI.forEach(u => {
            if (u.educativ) {
                let judeteList = null;
                if (sex === 'masculin' && u.educativJudeteMasculin) {
                    judeteList = u.educativJudeteMasculin;
                } else if (sex === 'feminin' && u.educativJudeteFeminin) {
                    judeteList = u.educativJudeteFeminin;
                }
                if (judeteList && (judeteList.includes(judet) || judeteList.includes('toate'))) {
                    matches.push({ unitate: u, regimJudete: judeteList, judeteDeservite: u.judeteDeservite || [] });
                }
            }
            if (u.detentie) {
                let judeteList = null;
                if (sex === 'masculin' && u.detentieJudeteMasculin) {
                    judeteList = u.detentieJudeteMasculin;
                } else if (sex === 'feminin' && u.detentieJudeteFeminin) {
                    judeteList = u.detentieJudeteFeminin;
                }
                if (judeteList && (judeteList.includes(judet) || judeteList.includes('toate'))) {
                    matches.push({ unitate: u, regimJudete: judeteList, judeteDeservite: u.judeteDeservite || [] });
                }
            }
        });
        return matches;
    }

    // --- Modul EXECUTARE: folosește 'custodie' ---
    if (mode === 'executare') {
        const matches = [];
        UNITATI.forEach(u => {
            if (u.educativ || u.detentie || u.spital) return;

            const catSex = u.custodie?.[sex];
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
        return matches;
    }

    // --- Modul JUDICIAR: folosește 'transferJudiciar' ---
    if (mode === 'judiciar') {
        const matches = [];
        UNITATI.forEach(u => {
            if (u.educativ || u.detentie || u.spital) return;
            if (!u.transferJudiciar) return;

            // Dacă este risc, căutăm doar în regula de risc
            if (risc) {
                const riscRules = u.transferJudiciar.risc;
                if (!riscRules) return;
                const sexRisc = riscRules[sex];
                if (!sexRisc) return;
                if (!sexRisc.judete || !sexRisc.judete.includes(judet)) return;
                matches.push({
                    unitate: u,
                    regimJudete: sexRisc.judete,
                    judeteDeservite: u.judeteDeservite || [],
                    isRisc: true
                });
                return;
            }

            const sexRules = u.transferJudiciar[sex];
            if (!sexRules) return;

            const varstaRules = sexRules[varsta];
            if (!varstaRules) return;

            const rules = varstaRules;

            if (!rules.judete || !rules.judete.includes(judet)) return;
            if (rules.excludeRegim && rules.excludeRegim.includes(regimKey)) return;
            if (rules.doarRegim && !rules.doarRegim.includes(regimKey)) return;

            matches.push({
                unitate: u,
                regimJudete: rules.judete,
                judeteDeservite: u.judeteDeservite || [],
                isRisc: false
            });
        });

        // Eliminăm codul mort pentru Dolj (nu mai este necesar, deoarece Pelendava are transferJudiciar: {})
        // și Craiova are deja toate combinațiile
        return matches;
    }

    return [];
}
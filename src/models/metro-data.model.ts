export interface MetroData {
    metro_lines : MetroLine[];
    metro_stops : MetroStop[];
}

export interface MetroStop {
    stop_id: string;
    stop_code: string;
    stop_name: string;
    stop_description: string;
    stop_lat: number;
    stop_lon: number;
    wheelchair_boarding: boolean;
    line_ids: string[];
    stop_main: boolean;
}

export interface MetroLine {
    id: string;
    name: string;
    color: string; 
}

// export const METRO_DATA:MetroData = {
//     metro_lines: [
//       {
//         id: "MA",
//         name: "Linea A",
//         color: "orange",
//       },
//       {
//         id: "MB",
//         name: "Linea B",
//         color: "red",
//       },
//       {
//         id: "MB1",
//         name: "Linea B1",
//         color: "red",
//       },
//       {
//         id: "MC",
//         name: "Linea C",
//         color: "green",
//       },
//     ],
//     metro_stops: [
//       {
//         stop_id: "05000",
//         stop_code: "05000",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901297,
//         stop_lon: 12.50042,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "05016",
//         stop_code: "05016",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90436,
//         stop_lon: 12.424915,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "05019",
//         stop_code: "05019",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84297,
//         stop_lon: 12.584973,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "05020",
//         stop_code: "05020",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866747,
//         stop_lon: 12.536497,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "05022",
//         stop_code: "05022",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826872,
//         stop_lon: 12.480737,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "10000",
//         stop_code: "10000",
//         stop_name: "BRINDISI-SAN GIOVANNI (MA-MC)",
//         stop_description: "No description",
//         stop_lat: 41.885592,
//         stop_lon: 12.510612,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MC"]
//       },
//       {
//         stop_id: "10004",
//         stop_code: "10004",
//         stop_name: "SAN GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.88602,
//         stop_lon: 12.510527,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MC"]
//       },
//       {
//         stop_id: "10225",
//         stop_code: "10225",
//         stop_name: "STAZ.NE METRO CIPRO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.906987,
//         stop_lon: 12.448282,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "10227",
//         stop_code: "10227",
//         stop_name: "GIULIO CESARE/OTTAVIANO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.909655,
//         stop_lon: 12.459408,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "10240",
//         stop_code: "10240",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901745,
//         stop_lon: 12.500448,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "10245",
//         stop_code: "10245",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.900835,
//         stop_lon: 12.50047,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "10279",
//         stop_code: "10279",
//         stop_name: "OSTIENSE-PIRAMIDE (MB-RL)",
//         stop_description: "No description",
//         stop_lat: 41.875502,
//         stop_lon: 12.480505,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "20204",
//         stop_code: "20204",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.925078,
//         stop_lon: 12.57252,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "20205",
//         stop_code: "20205",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.925027,
//         stop_lon: 12.572432,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "20409",
//         stop_code: "20409",
//         stop_name: "TEANO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.890203,
//         stop_lon: 12.551117,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "30816",
//         stop_code: "30816",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909832,
//         stop_lon: 12.528137,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "30840",
//         stop_code: "30840",
//         stop_name: "STAZ.NE METRO CIPRO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.907125,
//         stop_lon: 12.447855,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "30850",
//         stop_code: "30850",
//         stop_name: "GIULIO CESARE/OTTAVIANO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90899,
//         stop_lon: 12.456713,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70031",
//         stop_code: "70031",
//         stop_name: "REPUBBLICA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.902507,
//         stop_lon: 12.497133,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70126",
//         stop_code: "70126",
//         stop_name: "BOLOGNA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914522,
//         stop_lon: 12.522198,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70240",
//         stop_code: "70240",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901158,
//         stop_lon: 12.500047,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "70245",
//         stop_code: "70245",
//         stop_name: "P.ZA VITTORIO EMANUELE (MA)",
//         stop_description: "No description",
//         stop_lat: 41.894072,
//         stop_lon: 12.503522,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70256",
//         stop_code: "70256",
//         stop_name: "LEPANTO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.911848,
//         stop_lon: 12.465752,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70340",
//         stop_code: "70340",
//         stop_name: "COLOSSEO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.891262,
//         stop_lon: 12.491467,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70371",
//         stop_code: "70371",
//         stop_name: "PORTA S. GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.886692,
//         stop_lon: 12.508513,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MC"]
//       },
//       {
//         stop_id: "70372",
//         stop_code: "70372",
//         stop_name: "APPIA-SAN GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.884987,
//         stop_lon: 12.510217,
//         wheelchair_boarding: true,
//         line_ids: ["MA"]
//       },
//       {
//         stop_id: "70422",
//         stop_code: "70422",
//         stop_name: "APPIA-SAN GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.885093,
//         stop_lon: 12.510363,
//         wheelchair_boarding: true,
//         line_ids: ["MA"]
//       },
//       {
//         stop_id: "70431",
//         stop_code: "70431",
//         stop_name: "P.ZA VITTORIO EMANUELE (MA)",
//         stop_description: "No description",
//         stop_lat: 41.895913,
//         stop_lon: 12.502035,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70479",
//         stop_code: "70479",
//         stop_name: "COLOSSEO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.891065,
//         stop_lon: 12.491602,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70481",
//         stop_code: "70481",
//         stop_name: "MAGNA GRECIA-SAN GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.88441,
//         stop_lon: 12.50923,
//         wheelchair_boarding: true,
//         line_ids: ["MA", "MC"]
//       },
//       {
//         stop_id: "70487",
//         stop_code: "70487",
//         stop_name: "MANZONI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.889712,
//         stop_lon: 12.50695,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70506",
//         stop_code: "70506",
//         stop_name: "MANZONI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.890848,
//         stop_lon: 12.506512,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70549",
//         stop_code: "70549",
//         stop_name: "CIRCO MASSIMO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.884062,
//         stop_lon: 12.486917,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70567",
//         stop_code: "70567",
//         stop_name: "S. M. BATTAGLIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.905385,
//         stop_lon: 12.504345,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70601",
//         stop_code: "70601",
//         stop_name: "TRITONE/BARBERINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903272,
//         stop_lon: 12.48768,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70702",
//         stop_code: "70702",
//         stop_name: "S. M. BATTAGLIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.90578,
//         stop_lon: 12.5048,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70747",
//         stop_code: "70747",
//         stop_name: "AVENTINO-CIRCO MASSIMO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.884,
//         stop_lon: 12.488407,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70757",
//         stop_code: "70757",
//         stop_name: "OSTIENSE-PIRAMIDE (MB - RL)",
//         stop_description: "No description",
//         stop_lat: 41.875305,
//         stop_lon: 12.480658,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "70774",
//         stop_code: "70774",
//         stop_name: "VIGNA MURATA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.827413,
//         stop_lon: 12.481133,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70787",
//         stop_code: "70787",
//         stop_name: "CAVE ARDEATINE-PIRAMIDE (MB)",
//         stop_description: "No description",
//         stop_lat: 41.875547,
//         stop_lon: 12.482725,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70811",
//         stop_code: "70811",
//         stop_name: "OSTIENSE-PIRAMIDE (MB - RL)",
//         stop_description: "No description",
//         stop_lat: 41.875505,
//         stop_lon: 12.480815,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "70815",
//         stop_code: "70815",
//         stop_name: "CIRCO MASSIMO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.88315,
//         stop_lon: 12.487935,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70834",
//         stop_code: "70834",
//         stop_name: "CAVE ARDEATINE-PIRAMIDE (MB)",
//         stop_description: "No description",
//         stop_lat: 41.875353,
//         stop_lon: 12.483048,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "70858",
//         stop_code: "70858",
//         stop_name: "BARBERINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.904357,
//         stop_lon: 12.488443,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70859",
//         stop_code: "70859",
//         stop_name: "TRITONE/BARBERINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903303,
//         stop_lon: 12.487407,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70862",
//         stop_code: "70862",
//         stop_name: "MANZONI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.890255,
//         stop_lon: 12.506022,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "70886",
//         stop_code: "70886",
//         stop_name: "BARBERINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.904513,
//         stop_lon: 12.488512,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "71033",
//         stop_code: "71033",
//         stop_name: "P.ZA VITTORIO EMANUELE (MA)",
//         stop_description: "No description",
//         stop_lat: 41.89509,
//         stop_lon: 12.505053,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "71083",
//         stop_code: "71083",
//         stop_name: "STAZ.NE METRO CIPRO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.907082,
//         stop_lon: 12.448143,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "71085",
//         stop_code: "71085",
//         stop_name: "S. MARIA DEL SOCCORSO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.915212,
//         stop_lon: 12.560828,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71120",
//         stop_code: "71120",
//         stop_name: "RIPA TEATINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.924693,
//         stop_lon: 12.57281,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71155",
//         stop_code: "71155",
//         stop_name: "VALLE AURELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903028,
//         stop_lon: 12.44194,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "71180",
//         stop_code: "71180",
//         stop_name: "MICHELOTTI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.915235,
//         stop_lon: 12.556227,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71264",
//         stop_code: "71264",
//         stop_name: "ALESSANDRINO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.87131,
//         stop_lon: 12.579722,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71576",
//         stop_code: "71576",
//         stop_name: "CONCA D'ORO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.940028,
//         stop_lon: 12.529438,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "71716",
//         stop_code: "71716",
//         stop_name: "TORRE SPACCATA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.868075,
//         stop_lon: 12.588048,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71718",
//         stop_code: "71718",
//         stop_name: "TORRE MAURA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.866815,
//         stop_lon: 12.595422,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71721",
//         stop_code: "71721",
//         stop_name: "GIARDINETTI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863418,
//         stop_lon: 12.61171,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71722",
//         stop_code: "71722",
//         stop_name: "TORRENOVA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.862995,
//         stop_lon: 12.616597,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71743",
//         stop_code: "71743",
//         stop_name: "TORRENOVA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863107,
//         stop_lon: 12.616747,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71745",
//         stop_code: "71745",
//         stop_name: "TORRE MAURA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.866722,
//         stop_lon: 12.596117,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71747",
//         stop_code: "71747",
//         stop_name: "TORRE SPACCATA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.868247,
//         stop_lon: 12.587927,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71749",
//         stop_code: "71749",
//         stop_name: "PARCO DI CENTOCELLE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.874452,
//         stop_lon: 12.568252,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71758",
//         stop_code: "71758",
//         stop_name: "TORRE GAIA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863717,
//         stop_lon: 12.636845,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71759",
//         stop_code: "71759",
//         stop_name: "BALDELLI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.857067,
//         stop_lon: 12.476417,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71760",
//         stop_code: "71760",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.862195,
//         stop_lon: 12.646265,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71776",
//         stop_code: "71776",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.86231,
//         stop_lon: 12.645568,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71778",
//         stop_code: "71778",
//         stop_name: "TORRE GAIA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863898,
//         stop_lon: 12.636242,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71792",
//         stop_code: "71792",
//         stop_name: "BORGHESIANA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863388,
//         stop_lon: 12.669673,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71794",
//         stop_code: "71794",
//         stop_name: "BORGHESIANA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863947,
//         stop_lon: 12.670793,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71816",
//         stop_code: "71816",
//         stop_name: "BORGHESIANA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.864057,
//         stop_lon: 12.670435,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71818",
//         stop_code: "71818",
//         stop_name: "BORGHESIANA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.863853,
//         stop_lon: 12.669687,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71899",
//         stop_code: "71899",
//         stop_name: "OSTIENSE/GARBATELLA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.867993,
//         stop_lon: 12.479338,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71933",
//         stop_code: "71933",
//         stop_name: "OSTIENSE/GARBATELLA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.868155,
//         stop_lon: 12.479613,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72042",
//         stop_code: "72042",
//         stop_name: "XXI APRILE/RICOTTI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914757,
//         stop_lon: 12.520408,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72055",
//         stop_code: "72055",
//         stop_name: "CAVOUR (MB)",
//         stop_description: "No description",
//         stop_lat: 41.895138,
//         stop_lon: 12.493838,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72063",
//         stop_code: "72063",
//         stop_name: "CAVOUR (MB)",
//         stop_description: "No description",
//         stop_lat: 41.894902,
//         stop_lon: 12.493425,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72074",
//         stop_code: "72074",
//         stop_name: "PORTA S. GIOVANNI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.886778,
//         stop_lon: 12.508205,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72077",
//         stop_code: "72077",
//         stop_name: "OTTAVIANO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.910033,
//         stop_lon: 12.458115,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72079",
//         stop_code: "72079",
//         stop_name: "LEPANTO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.912767,
//         stop_lon: 12.464845,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72153",
//         stop_code: "72153",
//         stop_name: "MANZONI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.890283,
//         stop_lon: 12.506362,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72179",
//         stop_code: "72179",
//         stop_name: "LEPANTO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.913043,
//         stop_lon: 12.465538,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72236",
//         stop_code: "72236",
//         stop_name: "CIPRO (MA-H)",
//         stop_description: "No description",
//         stop_lat: 41.908463,
//         stop_lon: 12.447827,
//         wheelchair_boarding: true,
//         line_ids: ["MA-H"]
//       },
//       {
//         stop_id: "72242",
//         stop_code: "72242",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826668,
//         stop_lon: 12.480988,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72274",
//         stop_code: "72274",
//         stop_name: "VALLE AURELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.904145,
//         stop_lon: 12.443703,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72277",
//         stop_code: "72277",
//         stop_name: "CIPRO (MA-H)",
//         stop_description: "No description",
//         stop_lat: 41.908177,
//         stop_lon: 12.448017,
//         wheelchair_boarding: true,
//         line_ids: ["MA","H"]
//       },
//       {
//         stop_id: "72439",
//         stop_code: "72439",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.827172,
//         stop_lon: 12.480322,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72482",
//         stop_code: "72482",
//         stop_name: "PIETRALATA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.913863,
//         stop_lon: 12.555905,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72516",
//         stop_code: "72516",
//         stop_name: "PIETRALATA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.915015,
//         stop_lon: 12.5556,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72520",
//         stop_code: "72520",
//         stop_name: "S. MARIA DEL SOCCORSO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914987,
//         stop_lon: 12.561378,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72594",
//         stop_code: "72594",
//         stop_name: "GARDENIE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.88534,
//         stop_lon: 12.561307,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "72596",
//         stop_code: "72596",
//         stop_name: "GARDENIE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.886807,
//         stop_lon: 12.561432,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "72613",
//         stop_code: "72613",
//         stop_name: "GARDENIE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.885658,
//         stop_lon: 12.560955,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "72650",
//         stop_code: "72650",
//         stop_name: "S. AGNESE ANNIBALIANO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.924233,
//         stop_lon: 12.515575,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "72677",
//         stop_code: "72677",
//         stop_name: "S. AGNESE ANNIBALIANO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.925042,
//         stop_lon: 12.515997,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "72685",
//         stop_code: "72685",
//         stop_name: "LIBIA (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.932243,
//         stop_lon: 12.520135,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "72726",
//         stop_code: "72726",
//         stop_name: "ALESSANDRINO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.871415,
//         stop_lon: 12.579895,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "72805",
//         stop_code: "72805",
//         stop_name: "GIULIO CESARE/OTTAVIANO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90954,
//         stop_lon: 12.459003,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "72886",
//         stop_code: "72886",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.82704,
//         stop_lon: 12.480203,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "72920",
//         stop_code: "72920",
//         stop_name: "AERONAUTICA/DOUHET (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826303,
//         stop_lon: 12.477813,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73032",
//         stop_code: "73032",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826627,
//         stop_lon: 12.481252,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73078",
//         stop_code: "73078",
//         stop_name: "DE LA SALLE (MA)",
//         stop_description: "No description",
//         stop_lat: 41.899112,
//         stop_lon: 12.427498,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73126",
//         stop_code: "73126",
//         stop_name: "BATTISTINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.906947,
//         stop_lon: 12.414068,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73154",
//         stop_code: "73154",
//         stop_name: "P.ZA IRNERIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.897955,
//         stop_lon: 12.430488,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73161",
//         stop_code: "73161",
//         stop_name: "VAL FIORITA/PARRI (MB-RL)",
//         stop_description: "No description",
//         stop_lat: 41.837608,
//         stop_lon: 12.463583,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "73163",
//         stop_code: "73163",
//         stop_name: "VAL FIORITA (MB-RL)",
//         stop_description: "No description",
//         stop_lat: 41.839213,
//         stop_lon: 12.464423,
//         wheelchair_boarding: true,
//         line_ids: ["MB-RL"]
//       },
//       {
//         stop_id: "73249",
//         stop_code: "73249",
//         stop_name: "AURELIA/IRNERIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.89901,
//         stop_lon: 12.429345,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73347",
//         stop_code: "73347",
//         stop_name: "EMO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.906738,
//         stop_lon: 12.449068,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73376",
//         stop_code: "73376",
//         stop_name: "BOLOGNA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.91306,
//         stop_lon: 12.520938,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73385",
//         stop_code: "73385",
//         stop_name: "VALLE AURELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.901418,
//         stop_lon: 12.439145,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73388",
//         stop_code: "73388",
//         stop_name: "EMO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.906782,
//         stop_lon: 12.449482,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73581",
//         stop_code: "73581",
//         stop_name: "BARBERINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.904345,
//         stop_lon: 12.488887,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73593",
//         stop_code: "73593",
//         stop_name: "P.LE OSTIENSE-PIRAMIDE (MB-RL)",
//         stop_description: "No description",
//         stop_lat: 41.875907,
//         stop_lon: 12.481872,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "73598",
//         stop_code: "73598",
//         stop_name: "GIUSTINIANO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.856552,
//         stop_lon: 12.478598,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73650",
//         stop_code: "73650",
//         stop_name: "PLE OSTIENSE-PIRAMIDE (MB-RL)",
//         stop_description: "No description",
//         stop_lat: 41.875918,
//         stop_lon: 12.481738,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "73692",
//         stop_code: "73692",
//         stop_name: "GIUSTINIANO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.856822,
//         stop_lon: 12.479425,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73755",
//         stop_code: "73755",
//         stop_name: "JONIO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.945682,
//         stop_lon: 12.528713,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "73879",
//         stop_code: "73879",
//         stop_name: "JONIO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.946015,
//         stop_lon: 12.527982,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "73882",
//         stop_code: "73882",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826667,
//         stop_lon: 12.481105,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73883",
//         stop_code: "73883",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826545,
//         stop_lon: 12.48161,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73889",
//         stop_code: "73889",
//         stop_name: "BARBERINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90377,
//         stop_lon: 12.489557,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "73922",
//         stop_code: "73922",
//         stop_name: "MONTI TIBURTINI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.915578,
//         stop_lon: 12.548093,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73960",
//         stop_code: "73960",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.920247,
//         stop_lon: 12.56505,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73979",
//         stop_code: "73979",
//         stop_name: "MONTI TIBURTINI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.915765,
//         stop_lon: 12.546697,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "73982",
//         stop_code: "73982",
//         stop_name: "MONTI TIBURTINI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914103,
//         stop_lon: 12.551507,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "74062",
//         stop_code: "74062",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.826587,
//         stop_lon: 12.481392,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "74128",
//         stop_code: "74128",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.8271,
//         stop_lon: 12.480303,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "74289",
//         stop_code: "74289",
//         stop_name: "IRNERIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.89832,
//         stop_lon: 12.43056,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "74315",
//         stop_code: "74315",
//         stop_name: "IRNERIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.89853,
//         stop_lon: 12.430552,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "74671",
//         stop_code: "74671",
//         stop_name: "TUSCOLANA/CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84929,
//         stop_lon: 12.574757,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "74699",
//         stop_code: "74699",
//         stop_name: "TUSCOLANA/CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84962,
//         stop_lon: 12.573563,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "74769",
//         stop_code: "74769",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842267,
//         stop_lon: 12.586298,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "74935",
//         stop_code: "74935",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866707,
//         stop_lon: 12.535177,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75137",
//         stop_code: "75137",
//         stop_name: "VAL FIORITA (MB-RL)",
//         stop_description: "No description",
//         stop_lat: 41.83873,
//         stop_lon: 12.464025,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "75207",
//         stop_code: "75207",
//         stop_name: "NUMIDIO QUADRATO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.86225,
//         stop_lon: 12.5533,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75224",
//         stop_code: "75224",
//         stop_name: "NUMIDIO QUADRATO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.862742,
//         stop_lon: 12.553123,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75265",
//         stop_code: "75265",
//         stop_name: "GIULIO AGRICOLA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.856447,
//         stop_lon: 12.563373,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75267",
//         stop_code: "75267",
//         stop_name: "LUCIO SESTIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.860003,
//         stop_lon: 12.557597,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75305",
//         stop_code: "75305",
//         stop_name: "LUCIO SESTIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.859457,
//         stop_lon: 12.557337,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75307",
//         stop_code: "75307",
//         stop_name: "GIULIO AGRICOLA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.856803,
//         stop_lon: 12.561947,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75309",
//         stop_code: "75309",
//         stop_name: "SUBAUGUSTA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.854252,
//         stop_lon: 12.566672,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75381",
//         stop_code: "75381",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903072,
//         stop_lon: 12.425253,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75487",
//         stop_code: "75487",
//         stop_name: "APPIA-RE DI ROMA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.880772,
//         stop_lon: 12.515042,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75488",
//         stop_code: "75488",
//         stop_name: "APPIA-PONTE LUNGO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.87825,
//         stop_lon: 12.518118,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75490",
//         stop_code: "75490",
//         stop_name: "APPIA-FURIO CAMILLO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.874123,
//         stop_lon: 12.523452,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75501",
//         stop_code: "75501",
//         stop_name: "SUBAUGUSTA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.854315,
//         stop_lon: 12.567267,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75503",
//         stop_code: "75503",
//         stop_name: "LUCIO SESTIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.860148,
//         stop_lon: 12.55671,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75505",
//         stop_code: "75505",
//         stop_name: "NUMIDIO QUADRATO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.86195,
//         stop_lon: 12.553262,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75515",
//         stop_code: "75515",
//         stop_name: "APPIA -FURIO CAMILLO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.874593,
//         stop_lon: 12.523487,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75517",
//         stop_code: "75517",
//         stop_name: "APPIA-PONTE LUNGO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.878455,
//         stop_lon: 12.518447,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75519",
//         stop_code: "75519",
//         stop_name: "APPIA-RE DI ROMA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.880945,
//         stop_lon: 12.515452,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75555",
//         stop_code: "75555",
//         stop_name: "L.GO COLLI ALBANI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.868533,
//         stop_lon: 12.52967,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75573",
//         stop_code: "75573",
//         stop_name: "L.GO COLLI ALBANI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.869602,
//         stop_lon: 12.529757,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75584",
//         stop_code: "75584",
//         stop_name: "CERVETERI-RE DI ROMA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.881693,
//         stop_lon: 12.512638,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75618",
//         stop_code: "75618",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903512,
//         stop_lon: 12.425312,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75699",
//         stop_code: "75699",
//         stop_name: "CERVETERI-RE DI ROMA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.881483,
//         stop_lon: 12.512832,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "75892",
//         stop_code: "75892",
//         stop_name: "REPUBBLICA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90325,
//         stop_lon: 12.49551,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "76180",
//         stop_code: "76180",
//         stop_name: "BATTISTINI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.906613,
//         stop_lon: 12.415467,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "76381",
//         stop_code: "76381",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90326,
//         stop_lon: 12.425347,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "76419",
//         stop_code: "76419",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.82857,
//         stop_lon: 12.470648,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "76701",
//         stop_code: "76701",
//         stop_name: "TUSCOLANA/CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.852238,
//         stop_lon: 12.569193,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "76857",
//         stop_code: "76857",
//         stop_name: "S. MARIA DEL SOCCORSO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.915785,
//         stop_lon: 12.561868,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "76935",
//         stop_code: "76935",
//         stop_name: "P.ZA VITTORIO EMANUELE (MA)",
//         stop_description: "No description",
//         stop_lat: 41.89518,
//         stop_lon: 12.504577,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77348",
//         stop_code: "77348",
//         stop_name: "L.GO COLLI ALBANI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.86994,
//         stop_lon: 12.529353,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77366",
//         stop_code: "77366",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901412,
//         stop_lon: 12.499617,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "77461",
//         stop_code: "77461",
//         stop_name: "LEPANTO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.911022,
//         stop_lon: 12.466472,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77464",
//         stop_code: "77464",
//         stop_name: "AVENTINO/CIRCO MASSIMO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.883433,
//         stop_lon: 12.487908,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "77804",
//         stop_code: "77804",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903598,
//         stop_lon: 12.425292,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77805",
//         stop_code: "77805",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903417,
//         stop_lon: 12.425322,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77806",
//         stop_code: "77806",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.903162,
//         stop_lon: 12.425128,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77808",
//         stop_code: "77808",
//         stop_name: "CORNELIA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90333,
//         stop_lon: 12.425337,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77815",
//         stop_code: "77815",
//         stop_name: "L.GO COLLI ALBANI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.869618,
//         stop_lon: 12.529463,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77861",
//         stop_code: "77861",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866105,
//         stop_lon: 12.534473,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77898",
//         stop_code: "77898",
//         stop_name: "SUBAUGUSTA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.853412,
//         stop_lon: 12.567148,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "77992",
//         stop_code: "77992",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.91986,
//         stop_lon: 12.565525,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "77993",
//         stop_code: "77993",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.92118,
//         stop_lon: 12.566337,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78008",
//         stop_code: "78008",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.861997,
//         stop_lon: 12.646415,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "78010",
//         stop_code: "78010",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.86183,
//         stop_lon: 12.646523,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "78011",
//         stop_code: "78011",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.861742,
//         stop_lon: 12.646587,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "78012",
//         stop_code: "78012",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.861645,
//         stop_lon: 12.64664,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "78071",
//         stop_code: "78071",
//         stop_name: "PULLINO-GARBATELLA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.866422,
//         stop_lon: 12.484368,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78124",
//         stop_code: "78124",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.852492,
//         stop_lon: 12.569452,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78125",
//         stop_code: "78125",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.852643,
//         stop_lon: 12.569247,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78129",
//         stop_code: "78129",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.85271,
//         stop_lon: 12.569155,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78138",
//         stop_code: "78138",
//         stop_name: "ORAZIO PULVILLO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.854043,
//         stop_lon: 12.567893,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78140",
//         stop_code: "78140",
//         stop_name: "L.GO COLLI ALBANI (MA)",
//         stop_description: "No description",
//         stop_lat: 41.869792,
//         stop_lon: 12.529513,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78168",
//         stop_code: "78168",
//         stop_name: "PIETRALATA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914677,
//         stop_lon: 12.555662,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78173",
//         stop_code: "78173",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.924858,
//         stop_lon: 12.571597,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78176",
//         stop_code: "78176",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.925092,
//         stop_lon: 12.5721,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78430",
//         stop_code: "78430",
//         stop_name: "BOLOGNA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914143,
//         stop_lon: 12.521698,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78431",
//         stop_code: "78431",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.861527,
//         stop_lon: 12.64671,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "78446",
//         stop_code: "78446",
//         stop_name: "PULLINO-GARBATELLA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.866893,
//         stop_lon: 12.484552,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78678",
//         stop_code: "78678",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.827713,
//         stop_lon: 12.479018,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78692",
//         stop_code: "78692",
//         stop_name: "MEDA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.91515,
//         stop_lon: 12.547338,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78755",
//         stop_code: "78755",
//         stop_name: "MARCONI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.849643,
//         stop_lon: 12.474678,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78798",
//         stop_code: "78798",
//         stop_name: "MARCONI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.848487,
//         stop_lon: 12.474838,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78840",
//         stop_code: "78840",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84235,
//         stop_lon: 12.58633,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78875",
//         stop_code: "78875",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.865252,
//         stop_lon: 12.534517,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78886",
//         stop_code: "78886",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.900473,
//         stop_lon: 12.50065,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "79292",
//         stop_code: "79292",
//         stop_name: "BALDELLI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.85672,
//         stop_lon: 12.476387,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "79435",
//         stop_code: "79435",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.852555,
//         stop_lon: 12.569347,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "79618",
//         stop_code: "79618",
//         stop_name: "BALDELLI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.857037,
//         stop_lon: 12.476897,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "79637",
//         stop_code: "79637",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842463,
//         stop_lon: 12.585805,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "79639",
//         stop_code: "79639",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.920433,
//         stop_lon: 12.565558,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "79641",
//         stop_code: "79641",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.920578,
//         stop_lon: 12.565643,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "79643",
//         stop_code: "79643",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.920328,
//         stop_lon: 12.565482,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "79644",
//         stop_code: "79644",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.920245,
//         stop_lon: 12.565415,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "79791",
//         stop_code: "79791",
//         stop_name: "S. MARIA DEL SOCCORSO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.914963,
//         stop_lon: 12.560783,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "80222",
//         stop_code: "80222",
//         stop_name: "PARCO DI CENTOCELLE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.87434,
//         stop_lon: 12.569863,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "80223",
//         stop_code: "80223",
//         stop_name: "PARCO DI CENTOCELLE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.874648,
//         stop_lon: 12.57039,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "80275",
//         stop_code: "80275",
//         stop_name: "MALATESTA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.887353,
//         stop_lon: 12.542262,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "80578",
//         stop_code: "80578",
//         stop_name: "PANTANO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.86548,
//         stop_lon: 12.708105,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "80605",
//         stop_code: "80605",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84242,
//         stop_lon: 12.587172,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "80725",
//         stop_code: "80725",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.900615,
//         stop_lon: 12.500038,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "80745",
//         stop_code: "80745",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.902185,
//         stop_lon: 12.499268,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "80746",
//         stop_code: "80746",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901413,
//         stop_lon: 12.499815,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "80748",
//         stop_code: "80748",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.90255,
//         stop_lon: 12.49951,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "80764",
//         stop_code: "80764",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842273,
//         stop_lon: 12.587483,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "80765",
//         stop_code: "80765",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842225,
//         stop_lon: 12.587555,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "80767",
//         stop_code: "80767",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842363,
//         stop_lon: 12.587308,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "80785",
//         stop_code: "80785",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.900662,
//         stop_lon: 12.500093,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "81151",
//         stop_code: "81151",
//         stop_name: "P.LE FLAMINIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.911838,
//         stop_lon: 12.475738,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81152",
//         stop_code: "81152",
//         stop_name: "P.LE FLAMINIO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.91186,
//         stop_lon: 12.475263,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81744",
//         stop_code: "81744",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84239,
//         stop_lon: 12.587238,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81768",
//         stop_code: "81768",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842312,
//         stop_lon: 12.5874,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81811",
//         stop_code: "81811",
//         stop_name: "ANAGNINA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.842458,
//         stop_lon: 12.587108,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81821",
//         stop_code: "81821",
//         stop_name: "GIULIO CESARE/LEPANTO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.91146,
//         stop_lon: 12.46644,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81844",
//         stop_code: "81844",
//         stop_name: "CONCA D'ORO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.93899,
//         stop_lon: 12.52723,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "81846",
//         stop_code: "81846",
//         stop_name: "CONCA D'ORO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.939003,
//         stop_lon: 12.52805,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "81874",
//         stop_code: "81874",
//         stop_name: "LIBIA ()",
//         stop_description: "No description",
//         stop_lat: 41.931805,
//         stop_lon: 12.519065,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "81907",
//         stop_code: "81907",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866725,
//         stop_lon: 12.536348,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81908",
//         stop_code: "81908",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866778,
//         stop_lon: 12.53642,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81910",
//         stop_code: "81910",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866887,
//         stop_lon: 12.536538,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81911",
//         stop_code: "81911",
//         stop_name: "ARCO DI TRAVERTINO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.866935,
//         stop_lon: 12.53659,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "81932",
//         stop_code: "81932",
//         stop_name: "ASMARA/S.AGNESE ANNIBALIANO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.925012,
//         stop_lon: 12.516537,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "81933",
//         stop_code: "81933",
//         stop_name: "ASMARA/S.AGNESE ANNIBALIANO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.924747,
//         stop_lon: 12.516575,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "82005",
//         stop_code: "82005",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909585,
//         stop_lon: 12.530468,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82006",
//         stop_code: "82006",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909613,
//         stop_lon: 12.530557,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82007",
//         stop_code: "82007",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909647,
//         stop_lon: 12.530638,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82023",
//         stop_code: "82023",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909893,
//         stop_lon: 12.530222,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82030",
//         stop_code: "82030",
//         stop_name: "TUSCOLANA/CINECITTA' (MA)",
//         stop_description: "No description",
//         stop_lat: 41.84925,
//         stop_lon: 12.573838,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "82073",
//         stop_code: "82073",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.828738,
//         stop_lon: 12.470728,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82134",
//         stop_code: "82134",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901673,
//         stop_lon: 12.499932,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "82186",
//         stop_code: "82186",
//         stop_name: "BRESSANONE/S. AGNESE ANNIBALIANO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.92355,
//         stop_lon: 12.516087,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "82188",
//         stop_code: "82188",
//         stop_name: "CONCA D'ORO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.941078,
//         stop_lon: 12.528607,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "82208",
//         stop_code: "82208",
//         stop_name: "ALESSANDRINO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.870765,
//         stop_lon: 12.579977,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82228",
//         stop_code: "82228",
//         stop_name: "TORRE MAURA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.86748,
//         stop_lon: 12.597368,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82275",
//         stop_code: "82275",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.827043,
//         stop_lon: 12.479993,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82289",
//         stop_code: "82289",
//         stop_name: "OTTAVIANO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.909002,
//         stop_lon: 12.457887,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "82302",
//         stop_code: "82302",
//         stop_name: "PARCO DI CENTOCELLE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.874515,
//         stop_lon: 12.568033,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82350",
//         stop_code: "82350",
//         stop_name: "OTTAVIANO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.909695,
//         stop_lon: 12.457975,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "82366",
//         stop_code: "82366",
//         stop_name: "SPAGNA (MA)",
//         stop_description: "No description",
//         stop_lat: 41.90668,
//         stop_lon: 12.48112,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "82383",
//         stop_code: "82383",
//         stop_name: "OSTIENSE/GARBATELLA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.866342,
//         stop_lon: 12.479418,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82387",
//         stop_code: "82387",
//         stop_name: "ALESSANDRINO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.870938,
//         stop_lon: 12.579893,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82426",
//         stop_code: "82426",
//         stop_name: "PARCO DI CENTOCELLE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.874538,
//         stop_lon: 12.567782,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82427",
//         stop_code: "82427",
//         stop_name: "GIARDINETTI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.86396,
//         stop_lon: 12.610598,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82428",
//         stop_code: "82428",
//         stop_name: "TORRE ANGELA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.864275,
//         stop_lon: 12.626225,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82430",
//         stop_code: "82430",
//         stop_name: "LA SPEZIA-LODI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.886702,
//         stop_lon: 12.518585,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82431",
//         stop_code: "82431",
//         stop_name: "MALATESTA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.887593,
//         stop_lon: 12.54021,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82432",
//         stop_code: "82432",
//         stop_name: "MALATESTA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.88709,
//         stop_lon: 12.542203,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82433",
//         stop_code: "82433",
//         stop_name: "LODI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.886832,
//         stop_lon: 12.518415,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82434",
//         stop_code: "82434",
//         stop_name: "TEANO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.890488,
//         stop_lon: 12.55143,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82437",
//         stop_code: "82437",
//         stop_name: "MIRTI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.88153,
//         stop_lon: 12.566605,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82438",
//         stop_code: "82438",
//         stop_name: "MIRTI (MC)",
//         stop_description: "No description",
//         stop_lat: 41.881693,
//         stop_lon: 12.566777,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82446",
//         stop_code: "82446",
//         stop_name: "ROMANO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.870857,
//         stop_lon: 12.577825,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82457",
//         stop_code: "82457",
//         stop_name: "PARCO DI CENTOCELLE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.874568,
//         stop_lon: 12.567565,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82496",
//         stop_code: "82496",
//         stop_name: "TORRE ANGELA (MC)",
//         stop_description: "No description",
//         stop_lat: 41.864273,
//         stop_lon: 12.626102,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82505",
//         stop_code: "82505",
//         stop_name: "GARDENIE (MC)",
//         stop_description: "No description",
//         stop_lat: 41.885777,
//         stop_lon: 12.561815,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82552",
//         stop_code: "82552",
//         stop_name: "PANTANO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.865455,
//         stop_lon: 12.70829,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82562",
//         stop_code: "82562",
//         stop_name: "BRINDISI-SAN GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.885663,
//         stop_lon: 12.51106,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MC"]
//       },
//       {
//         stop_id: "82596",
//         stop_code: "82596",
//         stop_name: "BRESSANONE/S.AGNESE ANNIBALIANO (MB1)",
//         stop_description: "No description",
//         stop_lat: 41.923338,
//         stop_lon: 12.516082,
//         wheelchair_boarding: true,
//         line_ids: ["MB1"]
//       },
//       {
//         stop_id: "82599",
//         stop_code: "82599",
//         stop_name: "PLE OSTIENSE-PIRAMIDE (MB - RL)",
//         stop_description: "No description",
//         stop_lat: 41.875912,
//         stop_lon: 12.481837,
//         wheelchair_boarding: true,
//         line_ids: ["MB","RL"]
//       },
//       {
//         stop_id: "82657",
//         stop_code: "82657",
//         stop_name: "MAGNA GRECIA-SAN GIOVANNI (MA - MC)",
//         stop_description: "No description",
//         stop_lat: 41.88428,
//         stop_lon: 12.509317,
//         wheelchair_boarding: true,
//         line_ids: ["MA", "MC"]
//       },
//       {
//         stop_id: "82698",
//         stop_code: "82698",
//         stop_name: "PIGNETO (MC)",
//         stop_description: "No description",
//         stop_lat: 41.888495,
//         stop_lon: 12.52756,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82737",
//         stop_code: "82737",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.90955,
//         stop_lon: 12.530377,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82740",
//         stop_code: "82740",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.90947,
//         stop_lon: 12.53017,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82741",
//         stop_code: "82741",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909445,
//         stop_lon: 12.530107,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82923",
//         stop_code: "82923",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.90971,
//         stop_lon: 12.530818,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82924",
//         stop_code: "82924",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909742,
//         stop_lon: 12.530887,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82927",
//         stop_code: "82927",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.828645,
//         stop_lon: 12.471118,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82928",
//         stop_code: "82928",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.828663,
//         stop_lon: 12.470697,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82929",
//         stop_code: "82929",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.828557,
//         stop_lon: 12.47107,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82930",
//         stop_code: "82930",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.828465,
//         stop_lon: 12.471037,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82936",
//         stop_code: "82936",
//         stop_name: "VALLE AURELIA (MA-FL3)",
//         stop_description: "No description",
//         stop_lat: 41.9034,
//         stop_lon: 12.443527,
//         wheelchair_boarding: true,
//         line_ids: ["MA","FL3"]
//       },
//       {
//         stop_id: "82951",
//         stop_code: "82951",
//         stop_name: "EUR FERMI (MB)",
//         stop_description: "No description",
//         stop_lat: 41.828305,
//         stop_lon: 12.47097,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "83054",
//         stop_code: "83054",
//         stop_name: "STAZ.NE METRO CIPRO (MA)",
//         stop_description: "No description",
//         stop_lat: 41.907108,
//         stop_lon: 12.448207,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "83106",
//         stop_code: "83106",
//         stop_name: "VALLE AURELIA (MA - FL3)",
//         stop_description: "No description",
//         stop_lat: 41.902818,
//         stop_lon: 12.442777,
//         wheelchair_boarding: true,
//         line_ids: ["MA","FL3"]
//       },
//       {
//         stop_id: "83112",
//         stop_code: "83112",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.925313,
//         stop_lon: 12.573288,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "83114",
//         stop_code: "83114",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.925623,
//         stop_lon: 12.573547,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "83127",
//         stop_code: "83127",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.90162,
//         stop_lon: 12.499295,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "83128",
//         stop_code: "83128",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.90191,
//         stop_lon: 12.499735,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "83129",
//         stop_code: "83129",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.902465,
//         stop_lon: 12.499583,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "83132",
//         stop_code: "83132",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.90169,
//         stop_lon: 12.499393,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "83133",
//         stop_code: "83133",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901688,
//         stop_lon: 12.500115,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "83134",
//         stop_code: "83134",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.901888,
//         stop_lon: 12.499568,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "83173",
//         stop_code: "83173",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.910097,
//         stop_lon: 12.528947,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "83174",
//         stop_code: "83174",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "No description",
//         stop_lat: 41.909943,
//         stop_lon: 12.528445,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "83476",
//         stop_code: "83476",
//         stop_name: "TERMINI (MA-MB-FS)",
//         stop_description: "No description",
//         stop_lat: 41.90146,
//         stop_lon: 12.50031,
//         wheelchair_boarding: true,
//         line_ids: ["MA","MB","FS"]
//       },
//       {
//         stop_id: "TRS01",
//         stop_code: "TRS01",
//         stop_name: "SAN GIOVANNI (MA-MC)",
//         stop_description: "No description",
//         stop_lat: 41.8862,
//         stop_lon: 12.511132,
//         wheelchair_boarding: true,
//         line_ids: ["MA-MC"]
//       },
//       {
//         stop_id: "20389",
//         stop_code: "20389",
//         stop_name: "COLOSSEO (MB)",
//         stop_description: "No description",
//         stop_lat: 41.891312,
//         stop_lon: 12.492332,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "20144",
//         stop_code: "20144",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "REBIBBIA (MB)",
//         stop_lat: 41.92489,
//         stop_lon: 12.57188,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "30651",
//         stop_code: "30651",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "REBIBBIA (MB)",
//         stop_lat: 41.92487,
//         stop_lon: 12.57185,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71082",
//         stop_code: "71082",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "REBIBBIA (MB)",
//         stop_lat: 41.92609,
//         stop_lon: 12.57389,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "71862",
//         stop_code: "71862",
//         stop_name: "FONTANA CANDIDA (MC)",
//         stop_description: "FONTANA CANDIDA (MC)",
//         stop_lat: 41.86732,
//         stop_lon: 12.65735,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "71937",
//         stop_code: "71937",
//         stop_name: "FONTANA CANDIDA (MC)",
//         stop_description: "FONTANA CANDIDA (MC)",
//         stop_lat: 41.86693,
//         stop_lon: 12.65782,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "73688",
//         stop_code: "73688",
//         stop_name: "LAURENTINA (MB)",
//         stop_description: "LAURENTINA (MB)",
//         stop_lat: 41.82679,
//         stop_lon: 12.48132,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78009",
//         stop_code: "78009",
//         stop_name: "GROTTE CELONI (MC)",
//         stop_description: "GROTTE CELONI (MC)",
//         stop_lat: 41.86192,
//         stop_lon: 12.64639,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "78132",
//         stop_code: "78132",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "CINECITTA' (MA)",
//         stop_lat: 41.85299,
//         stop_lon: 12.5688,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "78174",
//         stop_code: "78174",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "REBIBBIA (MB)",
//         stop_lat: 41.92488,
//         stop_lon: 12.57187,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78617",
//         stop_code: "78617",
//         stop_name: "AMERICA (MB)",
//         stop_description: "AMERICA (MB)",
//         stop_lat: 41.82896,
//         stop_lon: 12.47072,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "78873",
//         stop_code: "78873",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "CINECITTA' (MA)",
//         stop_lat: 41.85298,
//         stop_lon: 12.56882,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "79642",
//         stop_code: "79642",
//         stop_name: "PONTE MAMMOLO (MB)",
//         stop_description: "PONTE MAMMOLO (MB)",
//         stop_lat: 41.92083,
//         stop_lon: 12.56564,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82386",
//         stop_code: "82386",
//         stop_name: "STAZ.NE TIBURTINA (MB)/P.LE EST",
//         stop_description: "STAZ.NE TIBURTINA (MB)/P.LE EST",
//         stop_lat: 41.91217,
//         stop_lon: 12.53288,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "82458",
//         stop_code: "82458",
//         stop_name: "CINECITTA' (MA)",
//         stop_description: "CINECITTA' (MA)",
//         stop_lat: 41.85305,
//         stop_lon: 12.56872,
//         wheelchair_boarding: true,
//         line_ids: ['MA']
//       },
//       {
//         stop_id: "82489",
//         stop_code: "82489",
//         stop_name: "GARDENIE (MC)",
//         stop_description: "GARDENIE (MC)",
//         stop_lat: 41.88591,
//         stop_lon: 12.56216,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82506",
//         stop_code: "82506",
//         stop_name: "PANTANO (MC)",
//         stop_description: "PANTANO (MC)",
//         stop_lat: 41.86541,
//         stop_lon: 12.70742,
//         wheelchair_boarding: true,
//         line_ids: ["MC"]
//       },
//       {
//         stop_id: "82742",
//         stop_code: "82742",
//         stop_name: "STAZ.NE TIBURTINA (MB)",
//         stop_description: "STAZ.NE TIBURTINA (MB)",
//         stop_lat: 41.90941,
//         stop_lon: 12.53015,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//       {
//         stop_id: "83111",
//         stop_code: "83111",
//         stop_name: "REBIBBIA (MB)",
//         stop_description: "REBIBBIA (MB)",
//         stop_lat: 41.92498,
//         stop_lon: 12.57199,
//         wheelchair_boarding: true,
//         line_ids: ["MB"]
//       },
//     ]
//   };
let header = document.querySelector('#header');
// Developer | Data Scientist | UI/UX Designer
let anim = [
    { t: "D_", ms: 100 },
    { t: "De_", ms: 100 },
    { t: "Dev_", ms: 100 },
    { t: "Deve_", ms: 100 },
    { t: "Develo_", ms: 100 },
    { t: "Develop_", ms: 100 },
    { t: "Develope_", ms: 100 },
    { t: "Developer_", ms: 100 },
    { t: "Developer _", ms: 100 },
    { t: "Developer |_", ms: 100 },
    { t: "Developer | _", ms: 100 },
    { t: "Developer | D_", ms: 100 },
    { t: "Developer | Da_", ms: 100 },
    { t: "Developer | Dat_", ms: 100 },
    { t: "Developer | Data_", ms: 100 },
    { t: "Developer | Data _", ms: 100 },
    { t: "Developer | Data S_", ms: 100 },
    { t: "Developer | Data Sc_", ms: 100 },
    { t: "Developer | Data Sci_", ms: 100 },
    { t: "Developer | Data Scie_", ms: 100 },
    { t: "Developer | Data Scien_", ms: 100 },
    { t: "Developer | Data Scient_", ms: 100 },
    { t: "Developer | Data Scienti_", ms: 100 },
    { t: "Developer | Data Scientis_", ms: 100 },
    { t: "Developer | Data Scientist_", ms: 100 },
    { t: "Developer | Data Scientist _", ms: 100 },
    { t: "Developer | Data Scientist |_", ms: 100 },
    { t: "Developer | Data Scientist | _", ms: 100 },
    { t: "Developer | Data Scientist | U_", ms: 100 },
    { t: "Developer | Data Scientist | UI_", ms: 100 },
    { t: "Developer | Data Scientist | UI/_", ms: 100 },
    { t: "Developer | Data Scientist | UI/U_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX _", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX D_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX De_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Des_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Desi_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Desig_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Design_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Designe_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Designer_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Designer", ms: 5000 },
    { t: "Developer | Data Scientist | UI/UX Designe_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Design_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Desig_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Desi_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX Des_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX De_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX D_", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX _", ms: 100 },
    { t: "Developer | Data Scientist | UI/UX_", ms: 100 },
    { t: "Developer | Data Scientist | UI/U_", ms: 100 },
    { t: "Developer | Data Scientist | UI/_", ms: 100 },
    { t: "Developer | Data Scientist | UI_", ms: 100 },
    { t: "Developer | Data Scientist | U_", ms: 100 },
    { t: "Developer | Data Scientist | _", ms: 100 },
    { t: "Developer | Data Scientist |_", ms: 100 },
    { t: "Developer | Data Scientist _", ms: 100 },
    { t: "Developer | Data Scientist_", ms: 100 },
    { t: "Developer | Data Scientis_", ms: 100 },
    { t: "Developer | Data Scienti_", ms: 100 },
    { t: "Developer | Data Scient_", ms: 100 },
    { t: "Developer | Data Scien_", ms: 100 },
    { t: "Developer | Data Scie_", ms: 100 },
    { t: "Developer | Data Sci_", ms: 100 },
    { t: "Developer | Data Sc_", ms: 100 },
    { t: "Developer | Data S_", ms: 100 },
    { t: "Developer | Data _", ms: 100 },
    { t: "Developer | Data_", ms: 100 },
    { t: "Developer | Dat_", ms: 100 },
    { t: "Developer | Da_", ms: 100 },
    { t: "Developer | D_", ms: 100 },
    { t: "Developer | _", ms: 100 },
    { t: "Developer |_", ms: 100 },
    { t: "Developer _", ms: 100 },
    { t: "Developer_", ms: 100 },
    { t: "Develope_", ms: 100 },
    { t: "Develop_", ms: 100 },
    { t: "Develo_", ms: 100 },
    { t: "Deve_", ms: 100 },
    { t: "Dev_", ms: 100 },
    { t: "De_", ms: 100 },
    { t: "D_", ms: 100 },
    { t: "_", ms: 100 },
    { t: "D_", ms: 100 },
    { t: "De_", ms: 100 },
    { t: "Dev_", ms: 100 },
    { t: "Deve_", ms: 100 },
    { t: "Develo_", ms: 100 },
    { t: "Develop_", ms: 100 },
    { t: "Develope_", ms: 100 },
    { t: "Developer_", ms: 500 },
    { t: "Developer ", ms: 500 },
    { t: "Developer_", ms: 500 },
    { t: "Developer ", ms: 500 },
    { t: "Developer_", ms: 500 },
    { t: "Develope_", ms: 100 },
    { t: "Develop_", ms: 100 },
    { t: "Develo_", ms: 100 },
    { t: "Deve_", ms: 100 },
    { t: "Dev_", ms: 100 },
    { t: "De_", ms: 100 },
    { t: "D_", ms: 100 },
    { t: "_", ms: 100 },
    { t: "D_", ms: 100 },
    { t: "Da_", ms: 100 },
    { t: "Dat_", ms: 100 },
    { t: "Data_", ms: 100 },
    { t: "Data _", ms: 100 },
    { t: "Data S_", ms: 100 },
    { t: "Data Sc_", ms: 100 },
    { t: "Data Sci_", ms: 100 },
    { t: "Data Scie_", ms: 100 },
    { t: "Data Scien_", ms: 100 },
    { t: "Data Scient_", ms: 100 },
    { t: "Data Scienti_", ms: 100 },
    { t: "Data Scientis_", ms: 100 },
    { t: "Data Scientist_", ms: 500 },
    { t: "Data Scientist ", ms: 500 },
    { t: "Data Scientist_", ms: 500 },
    { t: "Data Scientist ", ms: 500 },
    { t: "Data Scientist_", ms: 500 },
    { t: "Data Scientis_", ms: 100 },
    { t: "Data Scienti_", ms: 100 },
    { t: "Data Scient_", ms: 100 },
    { t: "Data Scien_", ms: 100 },
    { t: "Data Scie_", ms: 100 },
    { t: "Data Sci_", ms: 100 },
    { t: "Data Sc_", ms: 100 },
    { t: "Data S_", ms: 100 },
    { t: "Data _", ms: 100 },
    { t: "Data_", ms: 100 },
    { t: "Dat_", ms: 100 },
    { t: "Da_", ms: 100 },
    { t: "D_", ms: 100 },
    { t: "_", ms: 100 },
    { t: "U_", ms: 100 },
    { t: "UI_", ms: 100 },
    { t: "UI/_", ms: 100 },
    { t: "UI/U_", ms: 100 },
    { t: "UI/UX_", ms: 100 },
    { t: "UI/UX _", ms: 100 },
    { t: "UI/UX D_", ms: 100 },
    { t: "UI/UX De_", ms: 100 },
    { t: "UI/UX Des_", ms: 100 },
    { t: "UI/UX Desi_", ms: 100 },
    { t: "UI/UX Desig_", ms: 100 },
    { t: "UI/UX Design_", ms: 100 },
    { t: "UI/UX Designe_", ms: 100 },
    { t: "UI/UX Designer_", ms: 500 },
    { t: "UI/UX Designer ", ms: 500 },
    { t: "UI/UX Designer_", ms: 500 },
    { t: "UI/UX Designer ", ms: 500 },
    { t: "UI/UX Designer_", ms: 500 },
    { t: "UI/UX Designe_", ms: 100 },
    { t: "UI/UX Design_", ms: 100 },
    { t: "UI/UX Desig_", ms: 100 },
    { t: "UI/UX Desi_", ms: 100 },
    { t: "UI/UX Des_", ms: 100 },
    { t: "UI/UX De_", ms: 100 },
    { t: "UI/UX D_", ms: 100 },
    { t: "UI/UX _", ms: 100 },
    { t: "UI/UX_", ms: 100 },
    { t: "UI/U_", ms: 100 },
    { t: "UI/_", ms: 100 },
    { t: "UI_", ms: 100 },
    { t: "U_", ms: 100 },
    { t: "_", ms: 100 },
    
    
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        i = 0;
        setTimeout(update, step.ms * 10);
    }
}
update();
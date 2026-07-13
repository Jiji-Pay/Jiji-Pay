
function payer() {

    const vendeur = document.querySelectorAll("input")[0].value;
    const article = document.querySelectorAll("input")[1].value;
    const prix = document.querySelectorAll("input")[2].value;
    const nom = document.querySelectorAll("input")[3].value;
    const telephone = document.querySelectorAll("input")[4].value;

    if (
        vendeur === "" ||
        article === "" ||
        prix === "" ||
        nom === "" ||
        telephone === ""
    ) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    window.location.assign("https://pay.wave.com/m/M_ci_KSgOfOLiIMqV/c/ci/");
}

$(document).on("click", ".gallery-img-container", function (event) {
    let link = $(this).find('img').attr("src")
    console.log(`url(../${link.substring(10, 100)})`);
    swal.fire({
        showCloseButton: true,
        showConfirmButton: false,
        imageUrl: `${link}`,
        width: 1000,
        imageHeight: 600,
        imageAlt: "Custom image"
    });
});
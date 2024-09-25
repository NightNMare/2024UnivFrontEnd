var div_list = document.getElementById("div_list");
var list = [
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWdV5SpFzI5JZhG7PaQZS5gBvuBeWO9-hulUTanoD9ODBZUEpqNtEZb5ntvE0R_F7FDnJgu6_FPzzygicWHmZgLkwHlJy4ed17iOxgnP8PZpj_jLglDQSwq44dWWhmNiEFUotvnaJ1HDJu3OsJLCDS54g.webp", name: "민지(NewJeans)", url: "https://namu.wiki/w/%EB%AF%BC%EC%A7%80(NewJeans)" },
    { image: "https://i.namu.wiki/i/OZu-Mj798ySgWgNd0l7VoRkl9YiS2KG_Ndh5lKrFyTUQv14CV-0TN5tBzLIxMAVMcx_BCtAxeeMJCjZLBhKoKRk43wwkPkIbpVX797Jb5GFo8wNKMTEn4KsFMT-BVC86hS0ofdkY6bKfIMYH3fz-HQ.webp", name: "하니(NewJeans)", url: "https://namu.wiki/w/%ED%95%98%EB%8B%88(NewJeans)" },
    { image: "https://i.namu.wiki/i/5pTHEo4qpWJ_ES-N8YXmM83L-czzlpVa2FXTjz5or8fE2IhlCyA55-t-1syxtwbIAJpvNoWrNKufgzZNLAmEOOQ7Ge1BxaVqlWF_9HoXUwBF0-sHcqB7qju85On1v_mPaGz-5lOeVv8iNKvQgm5bnA.webp", name: "다니엘(NewJeans)", url: "https://namu.wiki/w/%EB%8B%A4%EB%8B%88%EC%97%98(NewJeans)" },
    { image: "https://i.namu.wiki/i/EDWPGdqJcgdBdDaj3z_VDAyYmS1IOwhsm0QV4-szwbYzAPbB16-TYtSomrLiDK_3W3M_aMx7ORs88dsesQo-L2zQ-7juAm2Jr0QEiYo1JnSJnKT80Us9yZS4pkKpeeleGut-sHaOm4WBCzAFldtNCA.webp", name: "해린(NewJeans)", url: "https://namu.wiki/w/%ED%95%B4%EB%A6%B0" },
    { image: "https://i.namu.wiki/i/ZMSFLwPNelIs8_LlcgfycHjwZTU7yy_7hBdZZoej0Q7lfH3P2iiUZLPvELnvY_9yp47hjkAw7EaCidfZdPh4H76I8FEaz1U5NZk35bilmK1thCFKZu-iN6dbKNa40B2yvfa2OMkEa8dtWarWYf_V5A.webp", name: "혜인(NewJeans)", url: "https://namu.wiki/w/%ED%98%9C%EC%9D%B8" },
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWdaz6kudc4VFaXbfwWwYU09Ya48dSxXKTD6KLLPmmut1hpDYmfpDxqAwMKB4KPxFL-S3yRlzmdetYWEdC-Prdgg_AqqmRmXuFHn_4jB0mkLfnkFKCfL5jtZ_nx99w37PTP6aTmDdlgk2Pu14iHKRrXa8.webp", name: "카리나(에스파)", url: "https://namu.wiki/w/%EC%B9%B4%EB%A6%AC%EB%82%98" },
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWdbDkcXyQlaF2JPVak-9u4D4hw6HyvWVI6LWzPqWhfRaqz5lxVxP48smgM_AZvYcGL14FMy0Og-KAV62sXXaqxadYv6EM_2MVx7vXUJeq5edg_16Te1uFvdOqHRXFPThXajZaej9cIEDzmffK2r2lhWw.webp", name: "윈터(에스파)", url: "https://namu.wiki/w/%EC%9C%88%ED%84%B0(aespa)" },
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWdcmg1IaawHGmwo-n5Ng3xEF83NylYkEWfHTYszh2MxqyzxBdKj17CrCqHjkBmZLxFhecZu5n6KFJ9j9ltbEqBu-OuuosDMb33ZDbLytbfqfiy50fkIuNCe54o1razvl8WfWfuolSkJj2nZ2xViJ7o1Q.webp", name: "백지헌(프로미스나인)", url: "https://namu.wiki/w/%EB%B0%B1%EC%A7%80%ED%97%8C" },
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWdY7BceFdLUEx36VTOIfwatH8NK8GihpSLxTOm7jz0tkgMOB1LVT5Qmifc1lsx1uvpfLEFpOWFewtAC3YtZNJ6J1byU1iieDH0n5yP68L26ODW6Box2OQuRq4L-X8oYIt17qVqDCReGXTkfM2d0iXETk.webp", name: "이채영(프로미스나인)", url: "https://namu.wiki/w/%EC%9D%B4%EC%B1%84%EC%98%81(%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4%EB%82%98%EC%9D%B8)" },
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWddsrL4Cu2Bnp6nO4aHZIBWUJ2CR0sXwRfrazJlHu85S0LCWmnfjZqrmJc1PcoL72iZhO9-ku85OL6RTnxtmfacsWTEoEp6G4v3paTexUIxugaJOmmjdGQcAHqi79ZglvXLKnUcvGMbbiecGuXcXzcjg.webp", name: "장원영(아이브)", url: "https://namu.wiki/w/%EC%9E%A5%EC%9B%90%EC%98%81" },
    { image: "https://i.namu.wiki/i/TTuXE9lgTOH94WYtYIoWdXtmbVU-qKyOewl32co4WJ-jWMAbRefn9zwsmxoOxRvbVzaG1zTUtszuQIag51-rBflGwablzBol5-BDw0durTCMqxqFOdtHPmQXex9W6flR-rvJ5V-5fmieMoUG9wBsZXgbGib7q6jVsGjzjfRSQ9c.webp", name: "안유진(아이브)", url: "https://namu.wiki/w/%EC%95%88%EC%9C%A0%EC%A7%84" },
    // { image: "", name: "", url: "" },
];

list.forEach((tmp) => {
    var p = document.createElement('picture');

    var source = document.createElement('source');
    source.srcset = tmp.image;
    source.type = "image/webp";
    var image = document.createElement('img');
    image.src = "media/default_image.jpg";
    image.classList.add('card_image');

    var str = document.createElement('p');
    str.innerText = tmp.name;
    str.style.textAlign = "center";
    var image_url = tmp.url;
    p.appendChild(source);
    p.appendChild(image);
    p.appendChild(str);
    p.addEventListener('click', function () {
        window.open(image_url);
    });
    p.classList.add("card");
    div_list.appendChild(p);
});
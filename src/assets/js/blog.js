const data = []

function submitData(event) {
    event.preventDefault()

    let nama = document
        .getElementById("project_name")
        .value
    let start_date = document
        .getElementById("start_date")
        .value
    let end_date = document
        .getElementById("end_date")
        .value
    let description = document
        .getElementById("description")
        .value
    let technologies = [];
    document
        .querySelectorAll('[name="technologies"]:checked')
        .forEach((checkbox) => {
            technologies.push(checkbox.value);
        });
    let image = document
        .getElementById("input-blog-image")
        .files
    let project_duration = countProjectDuration(); // 1 Bulan 2 Hari

    image = URL.createObjectURL(image[0])

    const obj = {
        nama,
        start_date,
        end_date,
        description,
        technologies,
        image,
        author: "jODI ADRIAN",
        project_duration,
    }

    data.push(obj)
    renderBlog()
}

function renderBlog() {
    document
        .getElementById("contents")
        .innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        document
            .getElementById("contents")
            .innerHTML += `<div class="div-card">
    <img src="${data[i]
            .image}" alt="" class="img-card"/>
    <h1 class="h1-card">
    ${data[i]
            .nama}
    </h1>
    <p class="p-card">
    ${data[i].project_duration}</p>

    <table class="table-card">
        <tr>
            <th class="th-card">Deskripsi</th>
            <th class="th-card">Technology</th>
        </tr>
        <tr>
            <td class="td-card">
            ${data[i]
            .description}</td>
            <td class="td-card">${data[i]
            .technologies}</td>
        </tr>
    </table>
</div>`
    }
}

function countProjectDuration() {
    // get value from input
	let start_date = document.getElementById("start_date").value;
	let end_date = document.getElementById("end_date").value;

    // convert string to date
	start_date = new Date(start_date);
	end_date = new Date(end_date);

	// Calculate the project duration in days by subtracting the start_date from the end_date.
    let project_duration = end_date - start_date;

    // Convert the duration from milliseconds to days by dividing it by the number of milliseconds in a day.
    project_duration = project_duration / (1000 * 60 * 60 * 24);

    // Round the calculated duration to the nearest whole number of days.
    project_duration = Math.round(project_duration);

    // Calculate the number of months in the project duration by dividing it by an approximate number of days in a month (30 days).
    month = Math.floor(project_duration / 30);

    // Calculate the remaining days after calculating the number of months.
    day = project_duration % 30;


    // return string project duration (month and day)
	return `Durasi: ${month} Bulan ${day} Hari`; // 1 Bulan 2 Hari
}


function filterProjectBasedOnTechnology() {
    // get value from select option
	let technology = document.getElementById("filter_technology").value;

    // if value is all, render all data
	if (technology == "all") {
		renderBlog();
	} else {
		document.getElementById("contents").innerHTML = "";

		for (let i = 0; i < data.length; i++) {
			if (data[i].technologies.includes(technology)) {
				document.getElementById(
					"contents"
				).innerHTML += `<div class="div-card">
                    <img src="${data[i].image}" alt="" class="img-card"/>
                    <h1 class="h1-card">
                    ${data[i].nama}
                    </h1>
                    <p class="p-card">
                    ${data[i].project_duration}</p>

                    <table class="table-card">
                        <tr>
                            <th class="th-card">Deskripsi</th>
                            <th class="th-card">Technology</th>
                        </tr>
                        <tr>
                            <td class="td-card">
                            ${data[i].description}</td>
                            <td class="td-card">${data[i].technologies}</td>
                        </tr>
                    </table>
                </div>`;
			}
		}
	}
}
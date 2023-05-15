class Task {
    constructor(desc, status) {
        this.desc = desc
        this.status = status
    }

    html(pos) {
        return `
        <div class="tarea" id="tarea">
        <img class="imagen" src="x-png.webp" alt="" width="20px" onclick="removeTask(${pos})">
        <h3>${this.desc}</h3>
        <div class="cuadrados">
            <div class="cuadroAzul" onclick="downTask(${pos})"></div>
            <div class="cuadroRojo" onclick="updateTask(${pos})"></div>
        `
    }
}

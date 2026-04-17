export function filtrar(data, filtroTitulo, filtroGrupo, filtroConfederacao, filtroBusca){
    const timesFiltrados = data.filter((time) => {
          return !filtroConfederacao || time.confederacao === filtroConfederacao
        }).filter((time) => {
          return filtroTitulo === '' || (filtroTitulo === 0? time.titulosCopa === filtroTitulo : time.titulosCopa >= filtroTitulo)
        }).filter((time) => {
          return filtroGrupo.length === 0 || filtroGrupo.includes(time.grupo)
        }).filter((time) => {
            return filtroBusca === '' || time.nome.toLowerCase().includes(filtroBusca.toLowerCase())
        })
    return timesFiltrados
}
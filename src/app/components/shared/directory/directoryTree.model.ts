export interface TreeNode {
    name: string;
    main?: boolean;
    url?: string;
    children?: TreeNode[];
}
  
export const TREE_DATA: TreeNode[] = [
    {
      name: '1. Generalidades',
      main: true,
      children: [
        {name: 'Apple'},
        {name: 'Banana'},
        {name: 'Fruit loops'},
      ]
    },
    {
      name: '2. Módulo Financiadores',
      main: true,
      children: [
        {name: 'Agregar Financiador'},
        {name: 'Editar Financiador'},
        {name: 'Eliminar Financiador'}
      ]
    },
    {
      name: '3. Módulo Organizaciones',
      main: true,
      children: [
        {name: 'Agregar Organización'},
        {name: 'Editar Organización'},
        {name: 'Eliminar Organización'}
      ]
    },
    {
      name: '4. Módulo Indicadores',
      main: true,
      children: [
        {name: 'Agregar Indicador'},
        {name: 'Editar Indicador'},
        {name: 'Eliminar Indicador'}
      ]
    },
    {
      name: '5. Módulo Proyectos',
      main: true,
      children: [
        {name: 'Agregar Proyecto'},
        {name: 'Editar Proyecto'},
        {name: 'Eliminar Proyecto'}
      ]
    },
    {
      name: '6. Módulo Fichas',
      main: true,
      children: [
        {name: 'Agregar Ficha'},
        {name: 'Editar Ficha'},
        {name: 'Eliminar Ficha'}
      ]
    },
    {
      name: '7. Módulo Reportes',
      main: true,
      children: [
        {name: 'Agregar Reporte'},
        {name: 'Editar Reporte'},
        {name: 'Eliminar Reporte'}
      ]
    },
    {
      name: '8. Módulo Documentos',
      main: true,
      children: [
        {name: 'Agregar Documento'},
        {name: 'Editar Documento'},
        {name: 'Eliminar Documento'}
      ]
    },
    {
      name: '9. Módulo Institucionales',
      main: true,
      children: [
        {name: 'Agregar Indicador Institucional'},
        {name: 'Editar Indicador Institucional'},
        {name: 'Eliminar Indicador Institucional'}
      ]
    },
    {
      name: '10. Módulo Usuarios',
      main: true,
      children: [
        {name: 'Agregar Usuario'},
        {name: 'Editar Usuario'},
        {name: 'Eliminar Usuario'}
      ]
    },
    {
      name: '11. Módulo de Configuración',
      main: true
    },
    {
      name: '12. LRC - Lenguaje de Reportes de CEFODI',
      main: true,
      children: [
        {name: 'Sintaxis'},
        {name: 'Sentencias'},
        {name: 'Características'},
        {name: 'Valores'},
      ]
    },
  ];
  
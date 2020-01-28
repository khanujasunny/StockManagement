

export const listConfig = {
  catagories: {
    title: 'Category List',
    addText: 'Add Category',
    fields: [
      { key: '_autoincrement', value: 'S.NO', width: 70 },
      { key: 'name', value: 'Category Name', editable: true },
      { key: 'HSNCode', value: 'HSN Code', editable: true },
      { key: 'GSTRate', value: 'GST Rate(%)', editable: true },
      { key: 'description', value: 'Description', editable: true },
      {
        key: '_actions', value: 'Actions', actions: [
          { key: 'delete', icon: 'trash', color: 'danger', tooltip: 'Delete', deleteAPI: 'categories/{id}' },
          { key: 'edit', icon: 'edit', color: 'primary', tooltip: 'Edit' }
        ], width: 150
      },

    ],
    totalPages: 3,
    currentPage: 0,
    options: {
      canSearch: true,
      importExport: true,
      canAdd: true,
      canEdit: true,
      canDelete: true
    },
    data: [],
    selected: {},
    apis: { getAPI: 'categories', deleteAPI: 'categories/{id}' }
  }
}

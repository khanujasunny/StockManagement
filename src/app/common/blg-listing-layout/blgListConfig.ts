

export const listConfig = {
  catagories: {
    title: 'Catagories',
    fields: [
      { key: 'name', value: 'Category Name', editable: true },
      { key: 'HSNCode', value: 'HSN Code', editable: true },
      { key: 'GSTRate', value: 'GST Rate(%)', editable: true },
      { key: 'description', value: 'Description', editable: true }
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
    data: [
      { slNo: 1, category: 'Electronic' },
      { slNo: 2, category: 'Stationary' },
      { slNo: 3, category: 'Clinic' },
      { slNo: 4, category: 'Grocery' },
      { slNo: 5, category: 'Medical' },
      { slNo: 6, category: 'Supplements' },
      { slNo: 7, category: 'Antique' }
    ],
    selected: {}
  }
}

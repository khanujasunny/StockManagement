

export const listConfig = {
  catagories: {
    title: 'Catagories',
    fields: [{ key: 'slNo', value: '#', editable: false, width: 30 }, { key: 'category', value: 'Category', editable: true }],
    totalPages: 10,
    currentPage: 2,
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

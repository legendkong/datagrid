import React from 'react'
import PropTypes from 'prop-types'
import { 
   DataGrid,
   gridPageCountSelector,
   gridPageSelector,
   useGridApiContext,
   useGridSelector
} from '@mui/x-data-grid'
import { Pagination } from '@mui/material'

/** @type {import('@mui/x-data-grid').GridColDef} */
export const DEF_COL_DEFS = {
   flex: 1,
   disableReorder: true
}

function MUIDataGridWrapper() {
  return (
    <div>MUIDataGridWrapper</div>
  )
}

export default MUIDataGridWrapper
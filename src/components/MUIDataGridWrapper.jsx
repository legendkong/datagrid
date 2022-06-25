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

const gridStyles = {
   '.MuiDataGridWrapper-columnHeaderTitle': {
      fontWeight: 'bolder'
   }
}

function CustomPagination () {
   const apiRef = useGridApiContext()
   const page = useGridSelector(apiRef, gridPageSelector)
   const pageCount = useGridSelector(apiRef, gridPageCountSelector)

   return (
      <Pagination
         color='primary'
         count={pageCount}
         page={page + 1}
         onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
   )
}


function MUIDataGridWrapper (props) {
   const { tableHeight = '500px', ...dataGridProps } = props

   const mappedColumns = dataGridProps.columns.map((c) => ({
      ...DEF_COL_DEFS,
      ...c
   }))

   return (
      <div style={{height: tableHeight, width: '100%' }}>
         <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
               <DataGrid
                  sx={{ ...gridStyles, ...dataGridProps.sx }}
                  disableColumnMenu
                  initialState={{
                     pagination: {
                        pageSize: 10
                     },
                     ...dataGridProps.initialState
                  }}
                  components={{
                     Pagination: CustomPagination,
                     ...dataGridProps.components
                  }}
                  {...dataGridProps}
                  columns={mappedColumns}
               />
            </div>
         </div>
      </div>  
   )
}

MUIDataGridWrapper.PropTypes = {
   tableHeight: PropTypes.string


export default MUIDataGridWrapper
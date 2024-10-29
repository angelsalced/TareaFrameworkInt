import XLSX from 'xlsx'

export const getData = (route) => {
	const workbook = XLSX.readFile(route)
	const rows: any = XLSX.utils.sheet_to_json(workbook.Sheets.Hoja1, {
		header: 1,
		raw: false,
	})

	const data = new DataTable(rows[0])
	rows.shift()
	rows.forEach((row) => {
		if (row.length) {
			data.add(row)
		}
	})
	return data
}

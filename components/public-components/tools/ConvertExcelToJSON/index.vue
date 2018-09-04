<template>
  <form>
    <label for="file">Chọn file: </label>
    <input type="file" id="file" :accept="SheetJSFT" @change="_change"/>
  </form>
</template>

<script>
  import XLSX from 'xlsx';

  const _SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
  ].map(function (x) {
    return "." + x;
  }).join(",");

  export default {
    data() {
      return {
        excelData: [],
        workSheetNames: [],
        jsonData: [],
        SheetJSFT: _SheetJSFT
      };
    },
    methods: {
      _change(evt) {
        const files = evt.target.files;
        console.log(files);
        if (files && files[0]) this._readFile(files[0]);
      },
      _readFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {

          //read file excel
          const binaryStr = e.target.result;
          const workSheet = XLSX.read(binaryStr, {type: 'binary'});

          //get all worksheet names
          this.workSheetNames = workSheet.SheetNames;

          //read every worksheet
          for (let i = 0; i < this.workSheetNames.length; i++) {
            let ws = workSheet.Sheets[this.workSheetNames[i]];

            // convert excel to json
            let excelData = XLSX.utils.sheet_to_json(ws, {header: 1});
            this.excelData.push(JSON.stringify(excelData));

          }
          console.log(this.excelData);
        };
        reader.readAsBinaryString(file);
      },
    }
  };
</script>

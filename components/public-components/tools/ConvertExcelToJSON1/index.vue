<template>
  <!--<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress" style="margin-top: 100px">-->
    <div class="row">
      <div class="col-xs-12">
        <form class="form-inline">
          <div class="form-group">
            <label for="file">Chọn file: </label>
            <input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change"/>
          </div>
        </form>
      </div>
    </div>
    <!--<div class="row">-->
      <!--<div class="col-xs-12">-->
        <!--<button  class="btn btn-success" @click="_exportToExcel">Export-->
        <!--</button>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
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
      _suppress(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      },
      _drop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.excelDataTransfer.files;
        if (files && files[0]) this._readFile(files[0]);
      },
      _change(evt) {
        const files = evt.target.files;
        if (files && files[0]) this._readFile(files[0]);
      },
      _exportToExcel(evt) {
        /* convert state to workbook */
        let excelFile = XLSX.utils.book_new();

        for (let i = 0; i < this.workSheetNames.length; i++) {
          let ws = XLSX.utils.aoa_to_sheet(this.excelData[i]);
          XLSX.utils.book_append_sheet(excelFile, ws, this.workSheetNames[i]);
        }

        XLSX.writeFile(excelFile, this.fileName);
      },
      _readFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          /* Parse exelData */
          const binaryStr = e.target.result;
          const workSheet = XLSX.read(binaryStr, {type: 'binary'});

          this.workSheetNames = workSheet.SheetNames;
          this.fileName = file.name;

          for (let i = 0; i < this.workSheetNames.length; i++) {
            let ws = workSheet.Sheets[this.workSheetNames[i]];

            // convert excel to json
            let excelData = XLSX.utils.sheet_to_json(ws, {header: 1});
            console.log(JSON.stringify(excelData));


            // let index = new Object({});
            // index[`${this.workSheetNames[i]}`] = exelData;
            // // console.log(index);
            //
            // this.jsonData.push(this.workSheetNames[i]);

            // this.excelData.push(exelData);
          }
          // console.log(this.excelData);
        };
        reader.readAsBinaryString(file);
      },
    }
  };
</script>

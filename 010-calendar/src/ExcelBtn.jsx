import { CSVLink } from "react-csv";
import * as xlsx from "xlsx";
import JSZip from "jszip";

const ExcelBtn = () => {
  const HEADER = [
    {
      label: "이름",
      key: "name",
    },
    {
      label: "이메일",
      key: "email",
    },
  ];

  const DATA = [
    {
      name: "조윤식",
      email: "postop09@naver.com",
      number: "010-1234-5678",
    },
    {
      name: "조윤식",
      email: "postop09@naver.com",
      number: "010-1234-5678",
    },
    {
      name: "조윤식",
      email: "postop09@naver.com",
      number: "010-1234-5678",
    },
    {
      name: "조윤식",
      email: "postop09@naver.com",
      number: "010-1234-5678",
    },
  ];

  const zip = new JSZip();

  const download_base64_content = (filename, base64Text) => {
    //window.location="data:application/octastream;base64, " + base64Text;
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/octastream;base64," + base64Text
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const excelDownload = (columns) => {
    const worksheet = xlsx.utils.json_to_sheet(columns);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelFile = xlsx.write(workbook, { type: "buffer" });
    for (let i = 0; i < 5; i++) {
      zip.file(`dkssyud_${i}.xlsx`, excelFile);
    }
    zip
      .generateAsync({ type: "base64" })
      .then((text) => download_base64_content("file.zip", text));
  };

  return (
    <div>
      <button type="button" onClick={() => excelDownload(HEADER)}>
        엑셀 다운로드
      </button>
      <CSVLink data={DATA} headers={HEADER} filename="어쩌라고엑셀">
        CSV 다운로드
      </CSVLink>
    </div>
  );
};

export default ExcelBtn;

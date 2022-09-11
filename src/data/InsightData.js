import { FiDatabase, FiServer } from "react-icons/fi";
import { GiElectric } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";

export const InsightData = [
  {
    head: "Database",
    desc: "Data insight yang banyak kan bakal disimpen di database, ya kalo datanya banyak kan jadi gede juga size database-nya.",
    icon: <FiDatabase />,
  },
  {
    head: "Server",
    desc: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh listrik! ",
    icon: <FiServer />,
  },
  {
    head: "Listrik",
    desc: "Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.",
    icon: <GiElectric />,
  },
  {
    head: "Lingkungan",
    desc: "Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak kasih insight. Demi menyelamatkan bumi!",
    icon: <TbWorld />,
  },
];

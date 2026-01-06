<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :data="table1.data" :columns="table1.columns">
          </paper-table>
        </div>
      </card>
    </div>

    <div class="col-12">
      <card class="card-plain">
        <div class="table-full-width table-responsive">
          <paper-table
            type="hover"
            :title="table2.title"
            :sub-title="table2.subTitle"
            :data="table2.data"
            :columns="table2.columns"
          >
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Nome", "Salario", "Pais", "Cidade"];
const tableData = [
  {
    id: 1,
    nome: "Dakota Rice",
    salario: "$36.738",
    pais: "Niger",
    cidade: "Oud-Turnhout",
  },
  {
    id: 2,
    nome: "Minerva Hooper",
    salario: "$23,789",
    pais: "Curaçao",
    cidade: "Sinaai-Waas",
  },
  {
    id: 3,
    nome: "Sage Rodriguez",
    salario: "$56,142",
    pais: "Netherlands",
    cidade: "Baileux",
  },
  {
    id: 4,
    nome: "Philip Chaney",
    salario: "$38,735",
    pais: "Korea, South",
    cidade: "Overland Park",
  },
  {
    id: 5,
    nome: "Doris Greene",
    salario: "$63,542",
    pais: "Malawi",
    cidade: "Feldkirchen in Kärnten",
  },
];

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Stripped Table",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style></style>

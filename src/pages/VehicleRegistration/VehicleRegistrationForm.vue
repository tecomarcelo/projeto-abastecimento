<template>
  <card class="card" title="Cadastro de Veículo">
    <div>
      <form @submit.prevent="saveProfile">
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Modelo do Veículo" placeholder="ex: Civic LXR 2.0"
              v-model="vehicle.vehicleModel">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Fabricante" placeholder="ex: Honda" v-model="vehicle.fabricant">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Cor do Veículo" placeholder="ex: Preto" v-model="vehicle.color">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <div class="km-wrapper">
              <fg-input type="text" label="Autonomia do veículo" placeholder="somente valor" v-model="vehicle.autonomy">
              </fg-input>
              <span class="km">km</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label class="control-label">Tipo de Combustível</label>

            <select
              class="form-control"
              v-model="vehicle.idFuelType"
              required
            >
              <option disabled value="">Selecione...</option>
              <option
                v-for="fuel in fuelTypes"
                :key="fuel.idFuelType"
                :value="fuel.idFuelType"
              >
                {{ fuel.vehicleType }}
              </option>
            </select>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round :disabled="saving" native-type="submit">
            Incluir Veículo
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      vehicle: {
        vehicleModel: "",
        fabricant: "",
        color: "",
        autonomy: "",
        idFuelType: 0,
      },
      fuelTypes: [],
      loadingFuelTypes: false,
      saving: false,
    };
  },

  mounted() {
    this.loadFuelTypes();
  },

  methods: {
    async loadFuelTypes() {
      try {
        const { data } = await api.get('/fueltypes');
        this.fuelTypes = data;
      } catch (error) {
        console.error('Erro ao buscar tipos de combustível:', error);
        alert('Erro ao carregar tipos de combustível');
      }
    },

    async saveProfile() {
      if (!this.vehicle.idFuelType) {
        alert("Selecione um tipo de combustível");
        this.saving = false;
        return;
      }

      this.saving = true;
      try {
        const payload = {
          vehicleModel: this.vehicle.vehicleModel,
          fabricant: this.vehicle.fabricant,
          color: this.vehicle.color,
          autonomy: Number(this.vehicle.autonomy),
          idFuelType: Number(this.vehicle.idFuelType),
        };
        const { data, status } = await api.post('/vehicles', payload);
        if (status === 201 || status === 200) {
          alert('Veículo criado com sucesso! Veículo: ' + (this.vehicle.vehicleModel || '—'));
          // limpar formulário
          this.vehicle = {
            vehicleModel: '',
            fabricant: '',
            color: '',
            autonomy: 0,
            idFuelType: 0,
          };
        } else {
          alert('Resposta inesperada: ' + status);
        }
      } catch (err) {
        const message =
          err.response && err.response.data
            ? JSON.stringify(err.response.data)
            : err.message;
        alert('Erro ao criar veículo: ' + message);
      } finally {
        this.saving = false;
      }
    },
  },
};
</script>
<style>
  .km-wrapper {
  display: flex;
  align-items: flex-end;
  }

  .km {
    margin-left: 8px;
    padding-bottom: 12px; /* ajuste fino */
  }
</style>

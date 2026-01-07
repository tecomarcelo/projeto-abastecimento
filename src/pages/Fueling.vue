<template>
  <div class="col-xl-4 col-lg-5 col-md-6">
  <card class="card" title="Cadastro de Abastecimento">
    <div>
      <form @submit.prevent="saveProfile">
        <div class="row">
          <div class="col-md-6">
            <label class="control-label">Veículo abastecido</label>

            <select
              class="form-control"
              v-model="fueling.idVehicle"
              required
            >
              <option disabled value="">Selecione...</option>
              <option
                v-for="vehicle in vehicles"
                :key="vehicle.idVehicle"
                :value="vehicle.idVehicle"
              >
                {{ vehicle.vehicleModel }}
              </option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="control-label">Tipo de Combustível</label>

            <select
              class="form-control"
              v-model="fueling.idFuelType"
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

        <div class="row">
          <div class="col-md-12">
            <fg-input type="date" label="Data do abastecimento" placeholder="ex: 2023-05-15"
              v-model="fueling.fuelingDate">
            </fg-input>
          </div>
        </div>        

        <div class="row">
          <div class="col-md-8">
            <div class="km-wrapper">
              <fg-input type="text" label="Quilometragem do veiculo ao abastecer" placeholder="somente valor" v-model="fueling.correntKm">
              </fg-input>
              <span class="km">km</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Quantidade em litros" placeholder="ex: 18" v-model="fueling.quantity">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Custo do abastecimento" placeholder="ex: 125.50" v-model="fueling.fuelingCosts">
            </fg-input>
          </div>
        </div>  

        <div class="text-center">
          <p-button type="info" round :disabled="saving" native-type="submit">
            Incluir abastecimento
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      fueling: {
        idFuelType: "",
        quantity: "",
        fuelingDate: "",
        correntKm: "",
        idVehicle: "",
        fuelingCosts: "",
      },
      fuelTypes: [],
      vehicles: [],      
      loadingVehicles: false,
      saving: false,
    };
  },

  mounted() {
    this.loadFuelTypes();
    this.loadVehicles();
  },

  methods: {
    async loadFuelTypes() {
      try {
        const { data } = await api.get('/fueltypes');

        this.fuelTypes = data.filter(
        fuel => fuel.vehicleType !== 'Flex'
        );
        console.log('###Filtered fuel types:', this.fuelTypes);

      } catch (error) {
        console.error('Erro ao buscar tipos de combustível:', error);
        alert('Erro ao carregar tipos de combustível');
      }
    },

    async loadVehicles() {
      try {
        const { data } = await api.get('/vehicles');
        this.vehicles = data;
      } catch (error) {
        console.error('Erro ao buscar os veículos:', error);
        alert('Erro ao carregar os veículos');
      }
    },

    async saveProfile() {
      if (!this.fueling.idVehicle) {
        alert("Selecione um veiculo para abastecimento.");
        this.saving = false;
        return;
      }
      if (!this.fueling.idFuelType) {
        alert("Selecione um tipo de combustível");
        this.saving = false;
        return;
      }

      this.saving = true;
      try {
        const payload = {
          typeFuel: this.fueling.idFuelType,
          quantity: this.fueling.quantity,
          fuelingDate: this.fueling.fuelingDate,
          correntKm: Number(this.fueling.correntKm),
          idVehicle: Number(this.fueling.idVehicle),
          fuelingCosts: this.fueling.fuelingCosts,
        };

        console.log('###Payload to be sent:', payload);

        const { data, status } = await api.post('/fueling', payload);
        if (status === 201 || status === 200) {
          alert('Abastecimento incluído com sucesso! Veículo abastecido: ' + (this.vehicle.vehicleModel || '—'));
          // limpar formulário
          this.fueling = {
            idFuelType: '',
            quantity: '',
            fuelingDate: '',
            correntKm: '',
            idVehicle: '',
            fuelingCosts: '',
          };
        } else {
          alert('Resposta inesperada: ' + status);
        }
      } catch (err) {
        const message =
          err.response && err.response.data
            ? JSON.stringify(err.response.data)
            : err.message;
        alert('Erro ao incluir abastecimento: ' + message);
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

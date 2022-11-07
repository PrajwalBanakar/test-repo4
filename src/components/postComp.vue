<!--HTML Code-->
<template>
  <div class="form-account shadow-8" >  

    <Toast />
        <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog group="templating">
                <template #message="slotProps">
                    <div class="flex p-4">
                        <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                        <p class="pl-2">{{slotProps.message.message}}</p>
                    </div>
                </template>
        </ConfirmDialog>

    <div class="flex justify-content-center">
    <div class="card">
    <h5 class="text-center">Account Opening form</h5>
    <form @submit.prevent="onSubmitForm" method="post" enctype="multipart/form-data" class="p-fluid">
    <div class="field">
    <div class="p-float-label">
      <InputText type="text" name="cusname" id="cusname" v-model="cusname" />
      <label for="cusname" class="col-fixed">Name</label>
    </div>
    </div>

    <div class="field">
    <div class="p-float-label">
      <InputNumber inputId="accnum" name="accnum" id="accnum" v-model="accnum" mode="decimal" :useGrouping="false" />
      <label for="accnum" class="col-fixed">Account number</label>
    </div>
    </div>


    <div class="field">
    <div class="p-float-label">
      <Calendar inputId="opendate" name="opendate" id="opendate" v-model="opendate" :showIcon="true" />
      <label for="opendate" class="col-fixed">Open Date</label>
    </div>
    </div>

    <div class="field">
    <div class="p-float-label">
      <InputNumber inputId="deposit" name="deposit" id="deposit" v-model="deposit" />
      <label for="deposit" class="col-fixed">Initial Deposit</label>
    </div>
    </div>

    <div class="buton">
    <Button label="Submit" type="submit" icon="pi pi-check"  iconPos="right" v-tooltip.right="'Click to proceed'" />
    <Button label="Reset" type="reset" class="p-button-secondary" icon="pi pi-times" iconPos="right" @click="resetForm()" />
      </div>

    </form>
    </div>
    </div>

  </div>
</template>


<!-- Javscript -->
<script setup>
//Imports
import axios from "axios";
import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
//Using composition api


    //Create ref for dynamic input
    const cusname = ref("");
    const accnum = ref("");
    const opendate = ref("");
    const deposit = ref("");
    const confirm = useConfirm();
    const toast = useToast();

    const confirm1 = (message, header) => {
      confirm.require({
            message: message,
            header: header,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                },
                onHide: () => {
                    this.$toast.add({severity:'error', summary:'Hide', detail:'You have hidden', life: 3000});
                }
          });
    }


  //Defining methods

    const onSubmitForm = () => {
      //Posting data to API
      axios
        .post(`/api/account/create`, {
          cusname: this.cusname,
          accnum: this.accnum,
          opendate: this.opendate,
          deposit: this.deposit,
        })
        .then((response) => {
          this.confirm1(response.data, 'Confirmation');

        })
        .catch((error) => console.log(error));
    }
    
    const resetForm = () => {
      console.log("Reset button clicked");
    }

</script>

<!-- CSS -->
<style>
.form-account{
  background-color: #99e6ff;
}

.buton{
  display:flex;
}

.p-button.p-component.p-button-secondary {
  margin-left: 10px;
}

body {
  background-color: rgb(189, 189, 218);
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
    file: File | null
//   number: number,
//   linkDetails: Link
}>()

const emits = defineEmits(['changeImage']);

const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
const email = defineModel('email')
// let profileImage = defineModel<File | null>('profileImage')
const profileImage = ref<File | null>()
const imagePreview = ref()

const errors = ref({
    firstName: false,
    lastName: false,
    email: false
})

function validateForm(){
    errors.value = {
        firstName: false,
        lastName: false,
        email: false
    }

    let hasError = false;

    if (firstName.value === ""){
        errors.value.firstName = true
        hasError = true
    }
    if (lastName.value === ""){
        errors.value.lastName = true
        hasError = true
    }
    if (email.value === ""){
        errors.value.email = true
        hasError = true
    }

    if (hasError) return false
    else return true
}

function handleFileUpload(event : any){
    if (event){
        profileImage.value = event.target?.files?.[0] ;

        if (profileImage){
            // Create a preview
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.value = e.target!.result;
            };
            reader.readAsDataURL(profileImage.value as Blob);
        }

        emits('changeImage', profileImage)
        
    }
}

onMounted(()=>{
    if (props.file){
        profileImage.value = props.file
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target!.result;
        };
        reader.readAsDataURL(props.file);
    } 
})

defineExpose({
    validateForm
})
</script>

<template>
    <div>
        <h1 class="text-2xl lg:text-3xl font-[700] my-2">Profile Details</h1>
        <p class="text-grey my-2">Add your details to create a personal touch to your profile</p>

        <div class="">
            <div class="bg-light-grey rounded-lg my-8 py-5 px-5 flex-col sm:flex-row! flex sm:items-center gap-6 sm:gap-10">
                <p class="text-grey">Profile Picture</p>
                <div class="flex gap-2 sm:items-center flex-col sm:flex-row!">
                    <label for="imageUpload" :class="imagePreview? 'bg-none preview': 'bg-light-purple'"  class="text-purple p-0 relative  h-50 w-48 rounded-lg flex flex-col items-center justify-center hover:cursor-pointer upload">
                        <img v-if="imagePreview" :src="imagePreview" class="h-full w-full rounded-lg " />

                        <div class="flex flex-col items-center justify-center gap-2" :class="imagePreview? 'hidden absolute preview-upload rounded-lg h-full w-full text-white bg-[#00000080]': 'flex'">
                            <img class="icon" src="/src/assets/images/icon-upload-image.svg" />
                            <p class="font-[500]">{{ imagePreview? '+ Change Image' : '+ Upload Image'}}</p>
                        </div>

                        <input id="imageUpload" type="file" @change="handleFileUpload" accept="image/*" class="h-0 w-1 opacity-0 border-2"/>
                    </label>
                    
                    <p class="text-sm text-grey">Image must be below 1024x1024px. <br/>Use PNG or JPG format.</p>
                </div>
            </div>

            <div class="bg-light-grey rounded-lg my-8 py-5 px-5 flex flex-col items-center gap-4 text-grey text-sm sm:text-base">
                <div class="flex justify-between w-full items-center gap-6">
                    <label for="firstName" class="w-30 sm:min-w-max">First Name</label>
                    <div class="w-[100%] flex-col flex">
                        <small v-if="errors.firstName" class="text-red font-[200]">First Name is required</small>
                        <input type="text" id="firstName" class="outline-0 font-extralight text-sm border-borders border rounded-lg px-4 py-4" v-model="firstName" />
                    </div>
                </div>
                <div class="flex justify-between w-full items-center gap-6">
                    <label for="lastName" class="w-30 sm:min-w-max">Last Name</label>
                    <div class="w-[100%] flex-col flex">
                        <small v-if="errors.lastName" class="text-red font-[200]">Last Name is required</small>
                        <input type="text" id="lastName" class="outline-0 font-extralight text-sm border-borders border rounded-lg px-4 py-4" v-model="lastName" />
                    </div>
                </div>
                <div class="flex justify-between w-full items-center gap-6">
                    <label for="email" class="w-30 sm:min-w-max">Email</label>
                    <div class="w-[100%] flex flex-col">
                        <small v-if="errors.email" class="text-red font-[200]">Email is required</small>
                        <input type="email" id="email" class="outline-0 font-extralight text-sm border-borders border rounded-lg px-4 py-4" v-model="email" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.upload:hover img.icon{
    transform: scale(1.2);
}

.preview:hover .preview-upload{
    display:flex
}
</style>
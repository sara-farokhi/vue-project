<template>
  <div class="container py-5">
    <h3 class="mb-5 border-top-0 border-start-0 border-end-0 pb-3 border">
      Edit Post
    </h3>
    <div v-if="formData.loading">
      <LoaderComp />
    </div>
    <form v-else @submit.prevent="validation">
      <div class="form col-md-7">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            v-model="formData.title"
            type="text"
            class="form-control"
            @input="formData.titleErr = false"
            id="title"
            placeholder="Please inter the title"
          />

          <p class="my-2 text-danger" v-if="formData.titleErr">
            This title is not valid
          </p>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">content</label>
          <textarea
            class="form-control"
            id="content"
            placeholder="Please enter the context"
            rows="7"
            v-model="formData.content"
            @input="formData.contentErr = false"
          ></textarea>

          <p class="my-2 text-danger" v-if="formData.contentErr">
            This content is not valid
          </p>
        </div>
        <button
          type="submit"
          value=""
          class="btn btn-primary"
          @click="validation"
        >
          Edit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
import LoaderComp from "../ui/LoaderComp.vue";

export default {
  components: {
    LoaderComp,
  },
  setup() {
    const formData = reactive({
      title: "",
      titleErr: false,
      invalidTitle: true,
      content: "",
      contentErr: false,
      invalidContent: true,
      loading: false,
    });
    const route = useRoute();
    const router = useRouter();

    const store = useStore();
    const id = route.params.id;

    const getPostInfo = async () => {
      formData.loading = true;
      const { data } = await axios.get(`http://localhost:3004/posts/${id}`);
      formData.title = data.title;
      formData.content = data.body;
      formData.loading = false;
    };
    getPostInfo();

    const editPost = async (data, id) => {
      formData.loading = true;
      const newPostData = {
        title: formData.title,
        body: formData.content,
      };

      try {
        await store.dispatch("postsModule/editSinglePost", { newPostData, id });

        formData.loading = false;
        Swal.fire({
          title: "Thanks!",
          text: "submission is done",
          icon: "success",
          confirmButtonText: "Cool",
        });
        router.push({ name: "posts" });
      } catch (error) {
        console.log(error);
      }
    };

    const validation = () => {
      const id = route.params.id;
      if (formData.title === "" && formData.invalidTitle) {
        formData.titleErr = true;
      } else {
        formData.invalidTitle = !formData.invalidTitle;
        formData.titleErr = false;
      }
      if (formData.content === "" && formData.invalidContent) {
        formData.contentErr = true;
      } else {
        formData.invalidContent = !formData.invalidContent;

        formData.contentErr = false;
      }
      if (
        formData.title !== "" &&
        !formData.invalidTitle &&
        formData.content !== "" &&
        !formData.invalidContent
      ) {
        const data = {
          title: formData.title,
          body: formData.content,
        };
        editPost(data, id);
      }

      formData.title = "";
      formData.content = "";
    };

    return { formData, validation, getPostInfo };
  },
};
</script>

<style></style>

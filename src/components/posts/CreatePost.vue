<template>
  <div class="container py-5">
    <h3 class="mb-5 border-top-0 border-start-0 border-end-0 pb-3 border">
      Create Post
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
            rows="3"
            v-model="formData.content"
            @input="formData.contentErr = false"
          ></textarea>

          <p class="my-2 text-danger" v-if="formData.contentErr">
            This content is not valid
          </p>
        </div>
        <button type="submit" class="btn btn-primary" @click="validation">
          Submit
        </button>
      </div>
    </form>

    <!-- {{ form.title }} -->
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LoaderComp from "../ui/LoaderComp.vue";

export default {
  components: {
    LoaderComp,
  },
  setup() {
    const store = useStore();
    const formData = reactive({
      title: "",
      titleErr: false,
      invalidTitle: true,
      content: "",
      contentErr: false,
      invalidContent: true,
      loading: false,
    });
    const router = useRouter();

    const createPost = async (newPostData) => {
      try {
        await store.dispatch("postsModule/createSinglePost", newPostData);
        router.push({ name: "posts" });
      } catch (error) {
        console.log(error);
      }
    };

    const validation = () => {
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
        const newPostData = {
          title: formData.title,
          body: formData.content,
        };

        createPost(newPostData);
      }

      formData.title = "";
      formData.content = "";
    };

    return { formData, validation, createPost };
  },
};
</script>

<style></style>

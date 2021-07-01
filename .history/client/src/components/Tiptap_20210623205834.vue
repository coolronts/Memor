<template>
<div class="my-24">
  <bubble-menu :editor="editor" v-if="editor">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        bold
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        italic
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        strike
      </button>
    </bubble-menu>
  <editor-content :editor="editor" class="" />
  </div>
</template>

<script>
import { useEditor, EditorContent ,BubbleMenu} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
    BubbleMenu
  },

  setup() {
    const editor = useEditor({
      content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
}
</script>

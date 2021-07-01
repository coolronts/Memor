<template>
<div class="my-24">
  <bubble-menu :editor="editor" v-if="editor">
    <button @click="editor.chain().focus().setFontFamily('Inter').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Inter' }) }">
      Inter
    </button>
    <button @click="editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) }">
      Comic Sans
    </button>
    <button @click="editor.chain().focus().setFontFamily('serif').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'serif' }) }">
      serif
    </button>
    <button @click="editor.chain().focus().setFontFamily('monospace').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'monospace' }) }">
      monospace
    </button>
    <button @click="editor.chain().focus().setFontFamily('cursive').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'cursive' }) }">
      cursive
    </button>
    <button @click="editor.chain().focus().unsetFontFamily().run()">
      Remove font-family
    </button>

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
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
    
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

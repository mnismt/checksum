<template>
  <v-layout row wrap>
    <v-flex xs12>
      <select-hashes @change="selectHash" />
    </v-flex>
    <v-flex xs9>
      <v-text-field
        label="File's directory"
        v-model="file"
        readonly
      />
    </v-flex>
    <v-flex xs3>
      <open-file @select="selectFile" />
    </v-flex>
    <v-flex xs12>
      <result :hash-string="result" v-if="result"/>
    </v-flex>
    <v-flex xs12>
      <v-btn 
        color="blue" :dark="(file) ? true : false" @click="check()" :disabled="!file"
        :loading="isHashing"
      >
        Checksum
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SelectHashes from './SelectHashes'
import OpenFile from './OpenFile'
import Result from './Result'
const crypto = require('crypto')
const fs = require('fs')

export default {
  components: {
    SelectHashes, OpenFile, Result
  },
  data: () => ({
    hash: 'md5',
    file: null,
    isHashing: false,
    result: null
  }),
  methods: {
    selectHash (hash) {
      this.hash = hash
    },
    selectFile (file) {
      this.file = file
    },
    check () {
      this.result = null
      let hash = crypto.createHash(this.hash)
      const stream = fs.createReadStream(this.file)
      this.isHashing = true
      stream.on('data', (data) => {
        hash.update(data)
      })
      stream.on('end', () => {
        this.result = hash.digest('hex')
        this.isHashing = false
      })
    }
  }
}
</script>

<style>

</style>

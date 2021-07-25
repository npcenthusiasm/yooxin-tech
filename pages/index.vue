<template>
  <div>
    <CompanyDesc />
    <News />
    <Collaborate />
  </div>
</template>

<script>
import CompanyDesc from '@/components/home/CompanyDesc'
import News from '@/components/home/News'
import Collaborate from '@/components/home/Collaborate'

export default {
  components: {
    CompanyDesc,
    News,
    Collaborate
  }
}
</script>

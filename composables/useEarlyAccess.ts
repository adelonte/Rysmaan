import { ref } from 'vue'

export const useEarlyAccess = () => {
  const isModalOpen = useState('early-access-modal', () => false)
  return {
    isModalOpen
  }
}

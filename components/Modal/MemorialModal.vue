<template>
  <div v-if="showModal" class="memorial-modal-overlay" @click.self="closeModal">
    <div class="memorial-modal">
      <div class="memorial-modal-content">
        <div class="memorial-image-container">
          <img
            src="/images/popup/mom1.jpg"
            alt="อาลัยราชินี"
            class="memorial-image"
            @error="onImageError"
          />
        </div>

        <div class="memorial-text">
          <!-- <h3 class="memorial-title">อาลัย</h3> -->
          <!-- <p class="memorial-description">ขอเรียนเชิญร่วมไว้อาลัย</p> -->
        </div>

        <div class="memorial-actions">
          <button
            type="button"
            class="btn btn-primary btn-enter-site"
            @click="closeModal"
          >
            เข้าสู่เว็บไซต์
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hasSeenMemorialModal = useState(
  "hasSeenMemorialModal",
  () => false
);
const showModal = ref(!hasSeenMemorialModal.value);

const closeModal = () => {
  showModal.value = false;
  hasSeenMemorialModal.value = true;
};

const onImageError = () => {
  console.error("Failed to load memorial image");
};
</script>

<style scoped>
.memorial-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.memorial-modal {
  max-width: 90%;
  max-height: 90%;
  position: relative;
}

.memorial-modal-content {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 600px;
  animation: fadeInScale 0.3s ease-out;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.memorial-image-container {
  position: relative;
  overflow: hidden;
}

.memorial-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  object-fit: cover;
}

.memorial-text {
  padding: 2rem;
}

.memorial-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.memorial-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0;
}

.memorial-actions {
  padding: 0 2rem 2rem;
}

.btn-enter-site {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  min-width: 150px;
  transition: all 0.3s ease;
}

.btn-enter-site:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .memorial-modal-content {
    margin: 1rem;
  }

  .memorial-title {
    font-size: 1.5rem;
  }

  .memorial-description {
    font-size: 1rem;
  }

  .memorial-text {
    padding: 1.5rem;
  }

  .memorial-actions {
    padding: 0 1.5rem 1.5rem;
  }
}

/* Dark overlay animation */
.memorial-modal-overlay {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

import axios from "axios"; // Import thư viện axios để gửi yêu cầu HTTP
import type { App } from "vue"; // Import kiểu dữ liệu App từ Vue

// Định nghĩa kiểu PlatformConfigs
interface PlatformConfigs {
  [key: string]: any; // Có thể thay đổi 'any' thành kiểu dữ liệu cụ thể hơn nếu biết trước
}

let config: PlatformConfigs = {}; // Khai báo biến để lưu trữ cấu hình
const { VITE_PUBLIC_PATH } = import.meta.env; // Lấy đường dẫn công khai từ biến môi trường

// Hàm để thiết lập cấu hình
const setConfig = (cfg?: PlatformConfigs) => {
  config = Object.assign(config, cfg); // Gộp các thuộc tính của cfg vào config
};

// Hàm để lấy cấu hình dựa trên khóa
const getConfig = (key?: string): PlatformConfigs | null => {
  if (typeof key === "string") { // Kiểm tra nếu key là chuỗi
    const arr = key.split("."); // Chia key thành mảng bằng dấu chấm
    if (arr && arr.length) {
      let data: PlatformConfigs | null = config; // Khởi tạo data bằng config
      for (const v of arr) { // Lặp qua từng phần tử trong mảng
        // Kiểm tra xem data không phải là null và thuộc tính tồn tại
        if (data && typeof data === "object" && v in data) {
          data = data[v]; // Cập nhật data thành thuộc tính đó
        } else {
          return null; // Nếu không tồn tại, trả về null
        }
      }
      return data; // Trả về giá trị của thuộc tính
    }
  }
  return config; // Nếu không có key, trả về toàn bộ config
};

/** Hàm để lấy cấu hình nền tảng của ứng dụng */
export const getPlatformConfig = async (app: App): Promise<PlatformConfigs | undefined> => {
  app.config.globalProperties.$config = getConfig(); // Gán cấu hình hiện tại vào thuộc tính toàn cục của app
  return axios({
    method: "get", // Phương thức gửi yêu cầu GET
    url: `${VITE_PUBLIC_PATH}platform-config.json` // Đường dẫn đến tệp JSON cấu hình
  })
    .then(({ data: newConfig }) => { // Xử lý dữ liệu trả về
      let $config = app.config.globalProperties.$config; // Lấy cấu hình toàn cục hiện tại
      // Nếu có cấu hình trả về và nó là đối tượng
      console.log(newConfig)
      if (app && $config && typeof newConfig === "object") {
        $config = Object.assign($config, newConfig); // Gộp cấu hình mới vào cấu hình hiện tại
        app.config.globalProperties.$config = $config; // Cập nhật cấu hình toàn cục
        setConfig($config); // Thiết lập cấu hình mới
      }
      return $config; // Trả về cấu hình đã cập nhật
    })
    .catch(() => {
      throw new Error("Vui lòng thêm nó vào thư mục công cộng platform-config.json Tệp cấu hình"); // Ném ra lỗi nếu không tìm thấy tệp cấu hình
    });
};

/** Hàm để lấy không gian lưu trữ phản hồi từ cấu hình */
const responsiveStorageNameSpace = (): string | undefined => getConfig()?.ResponsiveStorageNameSpace; // Trả về không gian lưu trữ phản hồi

// Xuất các hàm để sử dụng ở nơi khác
export { getConfig, setConfig, responsiveStorageNameSpace };

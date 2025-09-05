// services/api.js

const API_URL = "http://localhost:3001";

// =====================
// --- Course API ---
// =====================
export async function getCourse() {
  const res = await fetch(`${API_URL}/course`);
  if (!res.ok) throw new Error("خطا در دریافت اطلاعات درس");
  return await res.json();
}

// =====================
// --- Students API ---
// =====================
export async function getStudents() {
  const res = await fetch(`${API_URL}/students`);
  if (!res.ok) throw new Error("خطا در دریافت لیست دانشجویان");
  return await res.json();
}

export async function getStudent(id) {
  const res = await fetch(`${API_URL}/students/${id}`);
  if (!res.ok) throw new Error("دانشجو یافت نشد");
  return await res.json();
}

export async function addStudent(student) {
  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error("خطا در افزودن دانشجو");
  return await res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`${API_URL}/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error("خطا در ویرایش دانشجو");
  return await res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${API_URL}/students/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("خطا در حذف دانشجو");
  return true;
}

/**
 * ============================================================================
 * STUDENTS INDEX - AUTO-IMPORT ALL STUDENT PROFILES
 * ============================================================================
 *
 * EN: This file automatically exports all student profiles.
 *     When you create your student file, add an import and export here.
 *
 * ES: Este archivo exporta automáticamente todos los perfiles de estudiantes.
 *     Cuando crees tu archivo de estudiante, agrega un import y export aquí.
 *
 * ============================================================================
 * HOW TO ADD YOUR PROFILE / CÓMO AGREGAR TU PERFIL
 * ============================================================================
 *
 * EN:
 * 1. Create your file: your-username.ts (copy juan-pablo-jimenez.ts as template)
 * 2. Import it below (use camelCase for the variable name)
 * 3. Add it to the students array at the bottom
 *
 * Example:
 * import { mariaGarcia } from './maria-garcia'
 *
 * Then add to array:
 * export const students: Student[] = [
 *   juanPabloJimenez,  // Professor
 *   mariaGarcia,       // Your entry
 * ]
 *
 * ES:
 * 1. Crea tu archivo: tu-usuario.ts (copia juan-pablo-jimenez.ts como plantilla)
 * 2. Impórtalo abajo (usa camelCase para el nombre de la variable)
 * 3. Agrégalo al array de students al final
 *
 * ============================================================================
 */

// Import types
export type { Student, StudentSocials } from './types'

// Import all student profiles
// EN: Add your import here / ES: Agrega tu import aquí
import { juanPabloJimenez } from './juan-pablo-jimenez'
import { JaimeLondonoSaldarriaga } from './jaime-londoño-saldarriaga'
/**
 * Students Array
 *
 * EN: This array contains all student profiles.
 *     Add your imported profile to this array.
 *
 * ES: Este array contiene todos los perfiles de estudiantes.
 *     Agrega tu perfil importado a este array.
 */
export const students = [
  juanPabloJimenez, // Professor / Profesor
  // EN: Add your profile here / ES: Agrega tu perfil aquí
  // Example / Ejemplo: mariaGarcia,
  JaimeLondonoSaldarriaga,
] as const

/**
 * Get all students (mutable array for utility functions)
 * This is used by the utility functions in src/lib/students.ts
 */
export const allStudents = [...students]

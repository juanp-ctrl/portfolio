/**
 * Student Utility Functions
 *
 * Helper functions for working with student data.
 * These are separated from the constants to keep concerns separated.
 */

import { allStudents } from '@/constants/students'
import type { Student } from '@/constants/students'

/**
 * Find a student by their username
 *
 * @param username - The student's username (e.g., 'juan-pablo-jimenez')
 * @returns The student object or undefined if not found
 *
 * @example
 * const student = findStudentByUsername('maria-garcia')
 * if (student) {
 *   console.log(student.name) // "María García"
 * }
 */
export function findStudentByUsername(username: string): Student | undefined {
  return allStudents.find((student) => student.username === username)
}

/**
 * Get all students except the professor
 *
 * @returns Array of student profiles (excluding the professor)
 *
 * @example
 * const students = getStudentsOnly()
 * students.forEach(student => console.log(student.name))
 */
export function getStudentsOnly(): Student[] {
  return allStudents.filter(
    (student) => student.username !== 'juan-pablo-jimenez',
  )
}

/**
 * Get the professor's profile
 *
 * @returns The professor's student object or undefined
 *
 * @example
 * const professor = getProfessorProfile()
 * console.log(professor?.name) // "Juan Pablo Jiménez"
 */
export function getProfessorProfile(): Student | undefined {
  return allStudents.find(
    (student) => student.username === 'juan-pablo-jimenez',
  )
}

/**
 * Get total number of students (excluding professor)
 *
 * @returns Number of students
 */
export function getStudentCount(): number {
  return getStudentsOnly().length
}

/**
 * Check if a username is already taken
 *
 * @param username - The username to check
 * @returns True if username exists, false otherwise
 *
 * @example
 * if (isUsernameTaken('maria-garcia')) {
 *   console.log('This username is already in use')
 * }
 */
export function isUsernameTaken(username: string): boolean {
  return allStudents.some((student) => student.username === username)
}

/**
 * Get all unique interests from all students
 *
 * @returns Array of unique interests
 *
 * @example
 * const interests = getAllInterests()
 * console.log(interests) // ['React', 'TypeScript', 'Node.js', ...]
 */
export function getAllInterests(): string[] {
  const interestsSet = new Set<string>()
  allStudents.forEach((student) => {
    student.interests.forEach((interest) => interestsSet.add(interest))
  })
  return Array.from(interestsSet).sort()
}

/**
 * Search students by interest
 *
 * @param interest - The interest to search for
 * @returns Array of students with that interest
 *
 * @example
 * const reactDevelopers = searchByInterest('React')
 * console.log(reactDevelopers.map(s => s.name))
 */
export function searchByInterest(interest: string): Student[] {
  return allStudents.filter((student) =>
    student.interests.some((i) => i.toLowerCase() === interest.toLowerCase()),
  )
}

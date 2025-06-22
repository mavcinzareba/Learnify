import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          appName: "Learnify",
          courses: "Courses",
          dashboard: "Dashboard",
          login: "Log in",
          // Kursy
          reactBasics: "React Basics",
          reactBasicsDesc: "Learn the fundamentals of React",
          advancedJS: "Advanced JavaScript",
          advancedJSDesc: "Master advanced techniques",
          materialUI: "Material UI",
          materialUIDesc: "Create beautiful interfaces",
          // Tematy
          components: "Components",
          hooks: "Hooks",
          jsx: "JSX",
          closures: "Closures",
          prototypes: "Prototypes",
          asyncAwait: "Async/Await",
          theming: "Theming",
          styling: "Styling",
          // Ogólne
          availableCourses: "Available Courses",
          courseTopics: "Topics",
          startCourse: "Start Course",
          duration: "Duration",
          weeks: "{{count}} weeks", // Liczba mnoga
          login: "Login",
          email: "Email",
          password: "Password",
          forgotPassword: "Forgot password?",
          noAccount: "Don't have an account?",
          registerHere: "Register here",
          haveAccount: "Already have an account?",
          loginHere: "Login here",
          register: "Register",
          confirmPassword: "Confirm Password",
          
          // Komunikaty błędów
          invalidEmail: "Invalid email address",
          userDisabled: "This account has been disabled",
          invalidCredentials: "Invalid email or password",
          loginError: "Login failed. Please try again.",
          emailInUse: "Email already in use",
          weakPassword: "Password should be at least 6 characters",
          passwordMismatch: "Passwords don't match",
          registerError: "Registration failed. Please try again.",
          firstName: "First Name",
          lastName: "Last Name",
          passwordRequirements: "Password must be at least 6 characters long",
          registrationSuccess: "Registration completed successfully!",
          redirecting: "You will be redirected shortly...",
          passwordMismatch: "Passwords don't match",
          weakPassword: "Password must be at least 6 characters long",
          invalidEmail: "Invalid email address",
          emailInUse: "Email is already in use",
          operationNotAllowed: "Registration is currently disabled",
          course: "Course",
          courseContentPlaceholder: "Here you will find course content...",
          backToHome: "Back to home page",
          welcomeBack: "Welcome back",
          memberSince: "Member since",
          editProfile: "Edit profile",
          notifications: "Notifications",
          inProgress: "In progress",
          completed: "Completed",
          bookmarked: "Bookmarked",
          yourProgress: "Your progress",
          continueLearning: "Continue learning",
          completedCourses: "Completed courses",
          finalScore: "Final score",
          bookmarkedContent: "Saved content",
          noBookmarks: "You don't have any bookmarks yet",
          recommendedCourses: "Recommended courses",
          startCourse: "Start course",
          course: "Course",
          recentActivity: "Recent activity",
          upcomingDeadlines: "Upcoming deadlines",
          viewAll: "View all",
          points: "points",
          certificates: "Certificates",
          community: "Community",
          helpCenter: "Help center",
          settings: "Settings"
        }
      },
      pl: {
        translation: {
          appName: "Learnify",
          courses: "Kursy",
          dashboard: "Panel",
          login: "Zaloguj się",
          // Kursy
          reactBasics: "Podstawy React",
          reactBasicsDesc: "Naucz się podstaw React",
          advancedJS: "Zaawansowany JavaScript",
          advancedJSDesc: "Zaawansowane techniki programowania",
          materialUI: "Material UI",
          materialUIDesc: "Twórz piękne interfejsy",
          
          // Tematy
          components: "Komponenty",
          hooks: "Hooki",
          jsx: "JSX",
          closures: "Domknięcia",
          prototypes: "Prototypy",
          asyncAwait: "Async/Await",
          theming: "Motywy",
          styling: "Stylizacja",
          
          // Ogólne
          availableCourses: "Dostępne kursy",
          courseTopics: "Tematy",
          startCourse: "Rozpocznij kurs",
          duration: "Czas trwania",
          weeks: "{{count}} tygodnie",
          login: "Zaloguj się",
          email: "Email",
          password: "Hasło",
          forgotPassword: "Zapomniałeś hasła?",
          noAccount: "Nie masz konta?",
          registerHere: "Zarejestruj się tutaj",
          haveAccount: "Masz już konto?",
          loginHere: "Zaloguj się tutaj",
          register: "Zarejestruj się",
          confirmPassword: "Potwierdź hasło",
          
          // Komunikaty błędów
          invalidEmail: "Nieprawidłowy adres email",
          userDisabled: "To konto zostało wyłączone",
          invalidCredentials: "Nieprawidłowy email lub hasło",
          loginError: "Logowanie nie powiodło się. Spróbuj ponownie.",
          emailInUse: "Email jest już w użyciu",
          weakPassword: "Hasło powinno mieć co najmniej 6 znaków",
          passwordMismatch: "Hasła nie są identyczne",
          registerError: "Rejestracja nie powiodła się. Spróbuj ponownie.",
          firstName: "Imię",
          lastName: "Nazwisko",
          passwordRequirements: "Hasło musi mieć co najmniej 6 znaków",
          registrationSuccess: "Rejestracja zakończona sukcesem!",
          redirecting: "Za chwilę zostaniesz przekierowany...",
          passwordMismatch: "Hasła nie są identyczne",
          weakPassword: "Hasło musi mieć co najmniej 6 znaków",
          invalidEmail: "Nieprawidłowy adres email",
          emailInUse: "Email jest już w użyciu",
          operationNotAllowed: "Rejestracja jest obecnie wyłączona",
          course: "Kurs",
          courseContentPlaceholder: "Tutaj znajduje się zawartość kursu...",
          backToHome: "Powrót do strony głównej",
          welcomeBack: "Witaj z powrotem",
          memberSince: "Użytkownik od",
          editProfile: "Edytuj profil",
          notifications: "Powiadomienia",
          inProgress: "W trakcie",
          completed: "Ukończone",
          bookmarked: "Zakładki",
          yourProgress: "Twój postęp",
          continueLearning: "Kontynuuj naukę",
          completedCourses: "Ukończone kursy",
          finalScore: "Wynik końcowy",
          bookmarkedContent: "Zapisane materiały",
          noBookmarks: "Nie masz jeszcze zapisanych materiałów",
          recommendedCourses: "Rekomendowane kursy",
          startCourse: "Rozpocznij kurs",
          course: "Kurs",
          recentActivity: "Ostatnia aktywność",
          upcomingDeadlines: "Nadchodzące terminy",
          viewAll: "Zobacz wszystkie",
          points: "punkty",
          certificates: "Certyfikaty",
          community: "Społeczność",
          helpCenter: "Centrum pomocy",
          settings: "Ustawienia"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
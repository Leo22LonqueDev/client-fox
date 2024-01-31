import { createContext, useCallback, useMemo, useState } from "react"

interface IAuthContextData {
    logout: () => void
    isAuthenticated: boolean
    login: (email: string, password: string) => Promise<string | void>
}

const AuthContext = createContext({} as IAuthContextData)

interface IAuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {

    const [accessToken, setAccessToken] = useState<string>()

    

    const handleLogin = useCallback(async (email: string, password: string) => {
        // const result = AuthService.auth(email, password)
    }, [])

    const handleLogout = useCallback(() => {}, [])

    const isAuthenticated = useMemo(() => !accessToken, [accessToken])

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
import { Eye, EyeOff } from "lucide-react"
import { FC } from "react"
import { Link } from "react-router-dom"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

interface Props {
  showPassword: boolean
  onClickShowPassword?: () => void
  showConfirmPassword: boolean
  onClickShowConfirmPassword?: () => void
  email: string
  onChangeEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void
  firstName?: string
  onChangeFirstName?: (e: React.ChangeEvent<HTMLInputElement>) => void
  lastName?: string
  onChangeLastName?: (e: React.ChangeEvent<HTMLInputElement>) => void
  password?: string
  onChangePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void
  confirmPassword?: string
  onChangeConfirmPassword?: (e: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordError?: boolean
  onclickSignup?: () => void
}

const SignupView: FC<Props> = ({
  showPassword,
  onClickShowPassword,
  showConfirmPassword,
  onClickShowConfirmPassword,
  email,
  onChangeEmail,
  firstName,
  onChangeFirstName,
  lastName,
  onChangeLastName,
  password,
  onChangePassword,
  confirmPassword,
  onChangeConfirmPassword,
  showPasswordError,
  onclickSignup,
}) => {
  return (
    <section>
      <div className="container container-lg pt-16 w-full mx-auto flex justify-center min-h-screen">
        {/* container form para del login */}
        <div className="lg:flex-1 flex-col flex items-center justify-center">
          <div className="w-full">
            <div className="mb-12">
              <small className="text-gray-400 text-2xl">
                ¿Qué esperas para iniciar?
              </small>
              <h2 className="text-4xl font-semibold max-w-md">Registrate</h2>
            </div>
            <form className="max-w-md md:min-w-[350px] w-full">
              <div className="md:my-5 my-3">
                <label className="text-gray-700 text-xs font-semibold block my-1">
                  Correo
                </label>
                <Input
                  type="email"
                  placeholder="email@email.com"
                  onChange={onChangeEmail}
                  value={email}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="md:my-5 my-3">
                  <label className="text-gray-700 text-xs font-semibold block my-1">
                    Nombre
                  </label>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={onChangeFirstName}
                    required
                  />
                </div>
                <div className="md:my-5 my-3">
                  <label className="text-gray-700 text-xs font-semibold block my-1">
                    Apellido
                  </label>
                  <Input
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={onChangeLastName}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-4 ">
                <div className="md:my-5 my-3">
                  <label className="text-gray-700 text-xs font-semibold block my-1">
                    Contraseña
                  </label>
                  <div className="flex border rounded-md items-center px-3">
                    <Input
                      name="password"
                      className="border-none px-0"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={onChangePassword}
                    />
                    {showPassword ? (
                      <Eye
                        onClick={onClickShowPassword}
                        className="h-4 text-gray-500 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={onClickShowPassword}
                        className="h-4 text-gray-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div className="md:my-5 my-3">
                  <label className="text-gray-700 text-xs font-semibold block my-1">
                    Confirmar contraseña
                  </label>
                  <div className="flex border rounded-md items-center px-3">
                    <Input
                      name="confirmPassword"
                      className="border-none px-0"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      placeholder=" Enter your password"
                    />
                    {showConfirmPassword ? (
                      <Eye
                        onClick={onClickShowConfirmPassword}
                        className="h-4 text-gray-500 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={onClickShowConfirmPassword}
                        className="h-4 text-gray-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                {showPasswordError ? (
                  <span className="text-sm text-red-500">
                    Las contraseñas no coinciden
                  </span>
                ) : null}
              </div>
              <div className="my-5">
                <Button
                  type="button"
                  className="w-full"
                  disabled={
                    !email ||
                    !firstName ||
                    !lastName ||
                    !password ||
                    !confirmPassword ||
                    showPasswordError
                      ? true
                      : false
                  }
                  onClick={onclickSignup}
                >
                  Registrarse
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 my-5">
                <span className="h-[2px] w-full bg-gray-200 my-1" />
                <p className="text-gray-400 text-xs">O</p>
                <span className="h-[2px] w-full bg-gray-200 my-1" />
              </div>
              <p className="text-xs mt-10 text-center">
                Ya tienes una cuenta?{" "}
                <Link className="text-red-500" to="/signin">
                  Inicia Sesion
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* //container para el banner del login */}
        <div className="flex-1 hidden min-h-full   overflow-hidden lg:flex items-center justify-center">
          <div className="w-full h-full max-h-[500px] rounded-md overflow-hidden">
            {/* imagen ramdom */}
            <img
              className="h-full w-full object-cover object-center transform rotate-6"
              src="https://source.unsplash.com/random/?learning"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupView
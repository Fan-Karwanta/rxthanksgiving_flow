import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "../Section";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileType: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const profileTypes = [
    { id: "business", name: "Business", icon: "💼", description: "Professional networking" },
    { id: "services", name: "Services", icon: "🛍️", description: "Service providers" },
    { id: "portfolio", name: "Portfolio", icon: "📸", description: "Creatives & artists" },
    { id: "social", name: "Social", icon: "👥", description: "Content creators" },
    { id: "event", name: "Event", icon: "📅", description: "Event organizers" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleProfileSelect = (profileId) => {
    setFormData({ ...formData, profileType: profileId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.profileType) {
      setErrors({ profileType: "Please select a profile type" });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup - replace with actual auth later
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: "", color: "" };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    const levels = [
      { strength: 0, label: "", color: "" },
      { strength: 1, label: "Weak", color: "bg-red-500" },
      { strength: 2, label: "Fair", color: "bg-orange-500" },
      { strength: 3, label: "Good", color: "bg-yellow-500" },
      { strength: 4, label: "Strong", color: "bg-green-500" },
    ];
    
    return levels[strength];
  };

  const passwordStrength = getPasswordStrength();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] min-h-screen"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[32rem] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="h2 mb-4 animate-fade-in">
              {step === 1 ? "Create Your Account" : "Choose Your Profile"}
            </h1>
            <p className="body-1 text-n-3">
              {step === 1 
                ? "Join NexTap and start sharing your digital identity"
                : "Select the profile type that best fits your needs"
              }
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-color-1" : "text-n-4"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step >= 1 ? "bg-color-1 text-white" : "bg-n-6 text-n-4"}`}>
                1
              </div>
              <span className="hidden sm:inline text-sm">Account</span>
            </div>
            <div className={`w-12 h-0.5 transition-all duration-300 ${step >= 2 ? "bg-color-1" : "bg-n-6"}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-color-1" : "text-n-4"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step >= 2 ? "bg-color-1 text-white" : "bg-n-6 text-n-4"}`}>
                2
              </div>
              <span className="hidden sm:inline text-sm">Profile</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="relative p-8 bg-n-8 rounded-2xl border border-n-6 backdrop-blur-sm animate-slide-up">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-color-1/20 via-color-5/20 to-color-4/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Account Details */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-n-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-n-7 border rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:ring-1 transition-all duration-300 ${
                        errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-n-6 focus:border-color-1 focus:ring-color-1"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-n-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-n-7 border rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:ring-1 transition-all duration-300 ${
                        errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-n-6 focus:border-color-1 focus:ring-color-1"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-n-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-n-7 border rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:ring-1 transition-all duration-300 ${
                          errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-n-6 focus:border-color-1 focus:ring-color-1"
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-n-4 hover:text-n-2 transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex gap-1 mb-1">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                                level <= passwordStrength.strength ? passwordStrength.color : "bg-n-6"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-n-4">
                          Password strength: <span className={passwordStrength.strength >= 3 ? "text-green-500" : "text-orange-500"}>{passwordStrength.label}</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-n-2">
                      Confirm Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-n-7 border rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:ring-1 transition-all duration-300 ${
                        errors.confirmPassword ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-n-6 focus:border-color-1 focus:ring-color-1"
                      }`}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3 px-6 bg-gradient-to-r from-color-1 to-color-5 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Continue
                  </button>
                </div>
              )}

              {/* Step 2: Profile Type Selection */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid gap-3">
                    {profileTypes.map((profile) => (
                      <button
                        key={profile.id}
                        type="button"
                        onClick={() => handleProfileSelect(profile.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                          formData.profileType === profile.id
                            ? "border-color-1 bg-color-1/10"
                            : "border-n-6 bg-n-7 hover:border-n-5"
                        }`}
                      >
                        <span className="text-3xl">{profile.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-n-1">{profile.name}</h4>
                          <p className="text-sm text-n-4">{profile.description}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          formData.profileType === profile.id
                            ? "border-color-1 bg-color-1"
                            : "border-n-5"
                        }`}>
                          {formData.profileType === profile.id && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.profileType && <p className="text-red-500 text-xs text-center">{errors.profileType}</p>}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 px-6 bg-n-7 border border-n-6 text-n-2 font-semibold rounded-xl hover:bg-n-6 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading || !formData.profileType}
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-color-1 to-color-5 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Creating...
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Divider - Only on Step 1 */}
            {step === 1 && (
              <>
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-n-6"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-n-8 text-n-4">Or sign up with</span>
                  </div>
                </div>

                {/* Social Sign Up Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 px-4 bg-n-7 border border-n-6 rounded-xl hover:border-n-5 transition-all duration-300 hover:bg-n-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-n-2 text-sm font-medium">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 px-4 bg-n-7 border border-n-6 rounded-xl hover:border-n-5 transition-all duration-300 hover:bg-n-6">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-n-2 text-sm font-medium">GitHub</span>
                  </button>
                </div>
              </>
            )}

            {/* Sign In Link */}
            <p className="mt-8 text-center text-n-3">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-color-1 hover:text-color-1/80 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-n-3 hover:text-n-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-color-1/10 via-color-5/10 to-color-4/10 rounded-full blur-3xl -z-10 opacity-50" />
    </Section>
  );
};

export default SignUp;

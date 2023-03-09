defmodule PhxCypress.Repo do
  use Ecto.Repo,
    otp_app: :phx_cypress,
    adapter: Ecto.Adapters.Postgres
end

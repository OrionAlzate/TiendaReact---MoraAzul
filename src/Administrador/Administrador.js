export function Administrador() {
    return (
        <>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendamoraazul-fba5e.appspot.com/o/artesanias.jpg?alt=media&token=8c104d32-be7e-436d-a067-684032cce024" alt="foto" class="img-fluid" />
                    </div>
                    <div class="col-4">
                        <h2 class="text-center mb-4">Registro de mercancia</h2>
                        <form>
                            <div class="row">

                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-cart"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Nombre" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-camera-fill"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Foto" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-cart"></i>
                                        </span>
                                        <textarea type="text" class="form-control" placeholder="Description del producto" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-hash"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Cantidad" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-currency-dollar"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Precio" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-card-checklist"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Clasificacion" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-bookmarks"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Marca" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-truck"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Proveedor" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-box-seam"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Presentación" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-capslock-fill"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Peso" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-cash-coin"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Descuento" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-box"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Volumen" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-calendar2-week"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Fecha In" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-calendar2-week-fill"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Fecha Exp" />
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
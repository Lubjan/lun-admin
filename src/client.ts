RegisterCommand('color', (source, args: string[]) => {
    const veh = GetVehiclePedIsIn(PlayerPedId(), false);

    if (1 > args.length) return;

    const primary = parseInt(args[0], 10);
    const secondary = parseInt(args[1], 10) || GetVehicleColours(veh)[1];

    SetVehicleColours(veh, primary, secondary);
    
}, false);

RegisterCommand('whereami', (src) => {
    console.log(JSON.stringify(GetEntityCoords(PlayerPedId(), true)));
}, false);